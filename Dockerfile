# Use lightweight, secure Alpine Linux based Nginx image
FROM nginx:alpine

# Set labels for metadata
LABEL maintainer="Niket Kumar"
LABEL description="Containerized Portfolio Website"

# Clean out default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static website assets into Nginx public webroot
COPY . /usr/share/nginx/html

# Expose HTTP port 80
EXPOSE 80

# Healthcheck instruction to verify container responsiveness
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Run Nginx in foreground to keep container running
CMD ["nginx", "-g", "daemon off;"]
