FROM node
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /app

# copy everything
COPY . /app
 
# Installs all node packages
RUN npm install
RUN npm run build
 
# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD [ "npm", "start" ]