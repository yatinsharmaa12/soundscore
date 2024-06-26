ARG NODE_VERSION=22.2.0

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller base image for the final production image
FROM node:${NODE_VERSION}-alpine AS production

# Set the working directory
WORKDIR /app
# Copy the built application and node_modules from the build stage
COPY --from=base /app ./

# Expose port 3000 to the outside world
EXPOSE 3000

# Set environment variable to indicate production environment
ENV NODE_ENV production

# Start the Next.js application
CMD ["npm", "start"]


