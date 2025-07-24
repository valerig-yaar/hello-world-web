# Stage 1: Build (optional, in case you later use TS or want linting, npm install etc.)
FROM node:18-alpine AS builder
WORKDIR /app
COPY index.js .  # If you use package.json in the future, copy and install here too

# Stage 2: Run with secure, minimal base
FROM node:18-alpine

# Create non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create working directory
WORKDIR /app

# Copy only required files
COPY --from=builder /app/index.js .

# Drop privileges
USER appuser

# Expose only necessary port
EXPOSE 80

# Set security-relevant environment variables
ENV NODE_ENV=production

# Run the app
CMD ["node", "index.js"]
