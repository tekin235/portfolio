/**
 * Portfolio Projects & Case Studies Data
 * Featuring exclusively your real Figma Projects!
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Niket Kumar",
    title: "Graphic & Brand Identity Designer",
    tagline: "Crafting bold brand identities, event collateral, social media kits, and typography systems in Figma.",
    availability: "Open for Graphic Design Internship 2026",
    location: "Available for On-site / Hybrid / Remote",
    email: "niketkr235@gmail.com",
    socials: {
      figma: "https://www.figma.com/design/TLzHzbNAaQiUI9zQlmnPry/ELabs-ID-Card?node-id=258-1226",
      linkedin: "https://linkedin.com",
      resume: "#contact"
    },
    bio: "Graphic Designer proficient in Figma with a focus on institutional branding, promotional event campaigns, leadership announcements, and typography hierarchy. Passionate about creating crisp vector graphics, modular layout systems, and high-impact social media collateral while actively upskilling in Adobe Illustrator and Photoshop."
  },

  skills: {
    graphicDisciplines: [
      { name: "Brand Identity & Identity Collateral", level: 95 },
      { name: "Event Promotion & Poster Design", level: 94 },
      { name: "Social Media Announcement Kits", level: 96 },
      { name: "Typographic Layout & Hierarchy", level: 92 },
      { name: "Presentation & Pitch Decks", level: 90 },
      { name: "Vector Graphics & Icon Badges", level: 92 }
    ],
    designMethods: [
      { name: "Figma (Components, Frames & Vectors)", level: 95 },
      { name: "Vector Layout & Grid Systems", level: 94 },
      { name: "Print & Screen Color Harmonies", level: 90 },
      { name: "Standard Social Media Format Specs", level: 95 },
      { name: "Adobe Illustrator (Vector Paths)", level: 65, tag: "Learning" },
      { name: "Adobe Photoshop (Compositing & Mockups)", level: 60, tag: "Learning" }
    ],
    tools: [
      { name: "Figma", status: "Primary Tool (Advanced)", icon: "figma", category: "Layout, Vectors & Branding" },
      { name: "Figma Slides", status: "Proficient", icon: "slides", category: "Pitch Decks & Presentations" },
      { name: "Adobe Illustrator", status: "Currently Learning 🚀", icon: "illustrator", category: "Vector & Logo Craft" },
      { name: "Adobe Photoshop", status: "Currently Learning 🚀", icon: "photoshop", category: "Photo Editing & Mockups" }
    ]
  },

  projects: [
    {
      id: "elabs-id-card",
      title: "ELabs - Official ID Card & Identity Collateral",
      category: "branding",
      categoryLabel: "Brand Identity & ID System",
      subtitle: "Dual-sided institutional ID card system engineered with clear typography hierarchy, security QR codes, and lanyard branding.",
      year: "2026",
      duration: "1.5 Weeks",
      role: "Assistant Lead & Graphic Designer",
      tools: ["Figma", "Vector Components", "Print Layout Specs"],
      image: "assets/elabs-id-card.svg",
      figmaLink: "https://www.figma.com/design/TLzHzbNAaQiUI9zQlmnPry/ELabs-ID-Card?node-id=258-1226&t=RJZ9wf8yJ4i32gdZ-1",
      featured: true,
      stats: [
        { label: "ID Card Sides", value: "Front & Back" },
        { label: "Design Tool", value: "Figma 100%" },
        { label: "Print Standard", value: "CR80 300DPI" }
      ],
      overview: "ELabs required a standardized, professional, and visually engaging ID card system for core team members, leads, and staff. The goal was to establish clear visual distinction between leadership roles and departments while maintaining strict legibility and security scanning standards.",
      challenge: "Balancing multiple pieces of essential member data (photo, name, designation, department, ID number, verification QR code, and disclaimer text) within standard physical card constraints (85.6mm x 54mm) without feeling cluttered.",
      concept: "Utilized a clean high-contrast dark theme with vibrant electric cyan & blue accent stripes. Developed a dedicated visual hierarchy where the member's photo and name stand out instantly, with secondary technical verification details arranged on a structured back grid.",
      deliverables: [
        "Front & Back CR80 Standard ID Card Layouts in Figma",
        "Custom Lanyard Strap & Clip Branding Artwork",
        "Security QR Code and Authorization Signature Framing",
        "Organized Figma Component Master for rapid batch generation of member cards"
      ],
      learnings: "Working with strict physical print dimensions in Figma taught me the vital importance of minimum font sizes (6pt+) and generous bleed margins for physical production."
    },
    {
      id: "matlab-event",
      title: "MATLAB Workshop - Tech Event Graphic Campaign",
      category: "print-editorial",
      categoryLabel: "Event Poster & Social Collateral",
      subtitle: "Dynamic workshop branding, promotional poster series, registration graphics, and social media feed announcements.",
      year: "2026",
      duration: "2 Weeks",
      role: "Event Graphic & Campaign Designer",
      tools: ["Figma", "Typography Layout", "Vector Shapes"],
      image: "assets/matlab-event.svg",
      figmaLink: "https://www.figma.com/design/yagFA9rNrfvIsXXNrksFok/MATLAB-Event?node-id=83-2&t=d8DIzw54JZSCABTM-1",
      featured: true,
      stats: [
        { label: "Campaign Formats", value: "Posters & Posts" },
        { label: "Visual Theme", value: "Tech / Matrix" },
        { label: "Design Environment", value: "Figma Master" }
      ],
      overview: "A comprehensive promotional campaign for an intensive technical MATLAB workshop. The visual identity needed to communicate analytical computing, data simulation, and engineering excellence in an exciting, modern visual language.",
      challenge: "Technical workshops often suffer from dry, overly academic flyers. The challenge was creating high visual energy that captures students' attention across campus bulletin boards and fast-scrolling Instagram feeds.",
      concept: "Combined bold modern sans-serif typography with warm orange and amber gradient accents. Integrated mathematical wave curves and nodal mesh vector graphics that visually symbolize data modeling and simulation.",
      deliverables: [
        "High-Resolution Print-Ready Event Posters (A3/A4 formats)",
        "Instagram Post & Story Announcement Templates in Figma",
        "Speaker Spotlight & Guest Mentor Showcase Cards",
        "Registration CTA Banners with embedded QR codes"
      ],
      learnings: "Pairing a strong color hook (vibrant MATLAB orange on deep slate) with clear date and venue information blocks dramatically increased event registration speed."
    },
    {
      id: "lead-announcement",
      title: "Leadership Reveal - Social Media Announcement Kit",
      category: "marketing",
      categoryLabel: "Social Media & Visual Marketing",
      subtitle: "Official Lead & Assistant Lead announcement post series featuring premium portrait framing, star badges, and typographic contrast.",
      year: "2026",
      duration: "1 Week",
      role: "Social Media Graphic Designer",
      tools: ["Figma", "Social Media Formats", "Vector Frames"],
      image: "assets/lead-announcement.svg",
      figmaLink: "https://www.figma.com/design/iN84OGHSRuGqQnUrcfgcbS/Lead-Asst-lead-Post?node-id=0-1&t=S8XoxCMHcipCyerB-1",
      featured: true,
      stats: [
        { label: "Post Variations", value: "Lead & Asst" },
        { label: "Theme Accents", value: "Gold & Silver" },
        { label: "Aspect Ratios", value: "1:1 & 4:5" }
      ],
      overview: "An official leadership reveal social media campaign celebrating the appointment of the new Team Lead and Assistant Lead for the creative & technical guild.",
      challenge: "Creating distinct visual hierarchy between the Lead (Gold accent theme) and Assistant Lead (Silver/Cyan accent theme) while maintaining a cohesive, unified organization brand aesthetic.",
      concept: "Framed portrait photos with metallic gradient border rings, subtle star crests, and bold display lettering. Designed with optimal contrast so names and titles remain crystal clear on mobile feeds.",
      deliverables: [
        "Official Team Lead Announcement Graphics (Gold Master Theme)",
        "Assistant Lead Announcement Graphics (Silver/Cyan Master Theme)",
        "Instagram Feed (1:1), Portrait (4:5), and Story (9:16) format variations in Figma",
        "LinkedIn and Community Channel Banner adaptations"
      ],
      learnings: "Consistent framing templates allow member portraits of varying lighting and background conditions to look uniform and executive when published together."
    }
  ],

  experience: [
    {
      period: "April 2026 - Present",
      role: "Graphic & Brand Designer",
      company: "Student Society & Creative Projects (ELabs & Technical Events)",
      description: "Began dedicated graphic design journey in April 2026. Designed official society ID cards, technical event poster campaigns (MATLAB Workshop), and leadership announcement social media kits in Figma. Actively upskilling in Adobe Illustrator and Photoshop."
    }
  ],

  education: [
    {
      degree: "B.Tech (Bachelor of Technology) — 2nd Year",
      institution: "Undergraduate Engineering",
      year: "2024 - Present (Current)",
      details: "Currently in 2nd year of B.Tech. Bringing engineering discipline, logical structure, and creative visual communication to graphic design and branding projects."
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Senior Secondary School",
      year: "Completed in 2024",
      details: "Completed 12th standard education in 2024 with a strong analytical foundation before pursuing undergraduate engineering studies."
    }
  ]
};
