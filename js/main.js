/**
 * Main Application Logic & Interactive Features
 * Powered by your real Figma Projects & Live Embeds!
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProjectsGallery();
  initCaseStudyModal();
  initScrollSpy();
  initMobileMenu();
  initContactInteractions();
  initServiceWorker();
});

function initServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

/* ==========================================================================
   THEME TOGGLE & PERSISTENCE
   ========================================================================== */

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ==========================================================================
   PROJECTS GALLERY & FILTERING
   ========================================================================== */

function initProjectsGallery() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

function renderProjects(category) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const projects = PORTFOLIO_DATA.projects.filter(p => {
    if (category === 'all') return true;
    return p.category === category;
  });

  grid.innerHTML = '';

  projects.forEach((proj, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', proj.id);
    card.style.animation = `fadeUp 0.4s ease forwards ${index * 0.08}s`;

    // Tool tags HTML
    const toolsHtml = proj.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');

    // Stats HTML if present
    let statsHtml = '';
    if (proj.stats && proj.stats.length > 0) {
      statsHtml = `
        <div class="project-stats-row">
          ${proj.stats.map(s => `
            <div class="stat-box">
              <div class="stat-val">${s.value}</div>
              <div class="stat-lbl">${s.label}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="project-preview-wrap">
        <span class="project-category-badge">${proj.categoryLabel}</span>
        <img class="project-preview-img" src="${proj.image}" alt="${proj.title}" loading="lazy" />
      </div>
      <div class="project-info">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.subtitle}</p>
        ${statsHtml}
        <div class="project-tools">
          ${toolsHtml}
        </div>
        <span class="project-action-link">View Project &amp; Figma →</span>
      </div>
    `;

    card.addEventListener('click', () => {
      openCaseStudy(proj.id);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   CASE STUDY MODAL MANAGER WITH FIGMA EMBED SUPPORT (<DIALOG>)
   ========================================================================== */

function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.close();
      const iframeContainer = document.getElementById('figma-embed-container');
      if (iframeContainer) iframeContainer.innerHTML = '';
    });
  }

  // Light dismiss on backdrop click
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
    if (!isInDialog) {
      modal.close();
      const iframeContainer = document.getElementById('figma-embed-container');
      if (iframeContainer) iframeContainer.innerHTML = '';
    }
  });
}

function openCaseStudy(projectId) {
  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-dynamic-content');
  if (!modal || !modalBody) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  // Deliverables list
  let deliverablesHtml = '';
  if (project.deliverables && project.deliverables.length > 0) {
    deliverablesHtml = `
      <div class="modal-section-block">
        <h3>📦 Design Deliverables &amp; Output</h3>
        <ul>
          ${project.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Stats row for modal
  let statsRow = '';
  if (project.stats && project.stats.length > 0) {
    statsRow = `
      <div class="project-stats-row" style="margin: 20px 0;">
        ${project.stats.map(s => `
          <div class="stat-box">
            <div class="stat-val" style="font-size: 1.4rem;">${s.value}</div>
            <div class="stat-lbl">${s.label}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Figma Action Buttons & Live Embed Options
  let figmaActionsHtml = '';
  if (project.figmaLink && project.figmaLink.length > 0) {
    figmaActionsHtml = `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px;">
        <a href="${project.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          ❖ Open in Figma ↗
        </a>
        <button id="toggle-figma-embed-btn" class="btn btn-secondary btn-sm" type="button">
          ▶️ Load Interactive Figma Frame
        </button>
      </div>
      <div id="figma-embed-container" style="margin-top: 16px;"></div>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-hero-image-wrap">
      <img class="modal-hero-image" src="${project.image}" alt="${project.title}" />
    </div>
    <div class="modal-body">
      <div class="modal-header-meta">
        <span class="section-tag">${project.categoryLabel}</span>
        <h2>${project.title}</h2>
        <p class="modal-subtitle">${project.subtitle}</p>
        
        <div class="modal-pills-row">
          <span class="meta-pill">📅 Duration: ${project.duration}</span>
          <span class="meta-pill">👤 Role: ${project.role}</span>
          <span class="meta-pill">🛠️ Tools: ${project.tools.join(', ')}</span>
        </div>

        ${figmaActionsHtml}
      </div>

      ${statsRow}

      <div class="modal-section-block">
        <h3>🎯 Project Overview</h3>
        <p>${project.overview}</p>
      </div>

      <div class="modal-section-block">
        <h3>⚡ The Creative Challenge</h3>
        <p>${project.challenge}</p>
      </div>

      <div class="modal-section-block">
        <h3>💡 Visual Concept &amp; Strategy</h3>
        <p>${project.concept}</p>
      </div>

      ${deliverablesHtml}

      <div class="modal-section-block">
        <h3>🌱 Creative Takeaway &amp; Learnings</h3>
        <p>${project.learnings}</p>
      </div>
    </div>
  `;

  // Attach event listener to the live figma toggle button
  const toggleEmbedBtn = document.getElementById('toggle-figma-embed-btn');
  const embedContainer = document.getElementById('figma-embed-container');

  if (toggleEmbedBtn && embedContainer && project.figmaLink) {
    toggleEmbedBtn.addEventListener('click', () => {
      if (embedContainer.innerHTML === '') {
        const encodedUrl = encodeURIComponent(project.figmaLink);
        const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodedUrl}`;
        embedContainer.innerHTML = `
          <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-hover); background: var(--bg-tertiary);">
            <iframe style="width: 100%; height: 480px; border: none;" src="${figmaEmbedUrl}" allowfullscreen loading="lazy"></iframe>
          </div>
        `;
        toggleEmbedBtn.textContent = '⏹️ Close Interactive Frame';
      } else {
        embedContainer.innerHTML = '';
        toggleEmbedBtn.textContent = '▶️ Load Interactive Figma Frame';
      }
    });
  }

  modal.showModal();
}

/* ==========================================================================
   SCROLL SPY & MOBILE MENU
   ========================================================================== */

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   CONTACT INTERACTIONS & TOAST NOTIFICATIONS
   ========================================================================== */

function initContactInteractions() {
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Email copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
