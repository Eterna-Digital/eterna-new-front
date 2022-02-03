# pull official base image
FROM node:14.2.0-alpine as build-stage

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . .

CMD ["node", "start"]
