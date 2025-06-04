# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies for nodemon)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your service runs on
EXPOSE 5000

# Optional: install nodemon globally if needed
RUN npm install -g nodemon

# Start the service with nodemon (good for dev), or replace with `node index.js` for production
CMD ["nodemon", "index.js"]
