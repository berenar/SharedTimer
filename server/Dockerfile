FROM node:14

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .eslintrc.json ./
COPY .prettierrc.json ./
# copy source code to /app/src folder
COPY src /app/src

# copy environment files
COPY .env ./

RUN npm install
RUN npm run build

EXPOSE 3001

CMD [ "node", "./dist/server.js" ]