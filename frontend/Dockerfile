# Base on offical Node.js Alpine image
FROM node:last

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2
RUN npm i -D encoding
# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install
# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3002

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm","run", "--", "start" ]