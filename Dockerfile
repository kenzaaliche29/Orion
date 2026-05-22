# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install curl for healthcheck and serve for serving static files
RUN apk add --no-cache curl && npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist /app/dist

# Expose port 3000 (as configured in Coolify)
EXPOSE 3000

# Health check using curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Serve the application on port 3000 with SPA support
CMD ["serve", "-s", "dist", "-l", "3000", "--no-port-switching"]
