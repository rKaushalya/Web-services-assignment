# Build Stage
FROM node:18-alpine AS build

# Set the working directory for the backend
WORKDIR /app/backend

# Copy backend files
COPY Crypto-backEnd/package*.json ./
RUN npm install
COPY Crypto-backEnd/ .

# Build the frontend
WORKDIR /app/frontend
COPY crypto-frontend/package*.json ./
RUN npm install
COPY crypto-frontend/ .
RUN npm run build

# Move the frontend build to the backend's public directory
RUN mkdir -p /app/backend/public
RUN cp -R build/* /app/backend/public/

# Production Stage
FROM node:18-alpine AS production

# Set working directory for the backend
WORKDIR /app

# Copy backend files from the build stage
COPY --from=build /app/backend /app/backend

# Expose backend port
EXPOSE 5000

# Start the backend server (which now also serves the frontend)
CMD ["node", "backend/bin/www"]
