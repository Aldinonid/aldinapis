# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY package*.json ./
RUN npm install

COPY . .

# Define the entry point for the container
CMD ["npm", "run", "start:dev"]
EXPOSE 3000