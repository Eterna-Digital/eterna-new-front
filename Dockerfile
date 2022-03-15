# pull official base image
FROM node:14 as builder
# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm audit fix

# add app
COPY . .

RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
RUN mkdir /app
# Copy static assets from builder stage
COPY --from=builder /app/build /app
# Containers run nginx with global directives and daemon off
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
