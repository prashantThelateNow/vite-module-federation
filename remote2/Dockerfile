# Pull Image
FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY ./ ./

# Expose port 3002
EXPOSE 3002

# CMD ["npm", "run", "build"]
CMD ["npm", "run", "build-and-serve"]