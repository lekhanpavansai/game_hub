# ---------- Build stage ----------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install git (if needed for any dependencies)
RUN apk add --no-cache git

# Copy package.json and package-lock.json / yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build production-ready app
RUN npm run build

# ---------- Run stage ----------
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built files from builder
COPY --from=builder /app/dist ./

# Copy custom Nginx config if exists
# (optional, comment this line if you don't have nginx.conf)
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


