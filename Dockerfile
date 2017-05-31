#### BUILD ####
FROM node:7.10.0 AS base

# Make directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the app code
COPY . .
RUN npm install
RUN npm run prod

#### RELEASE ####
FROM nginx:alpine
LABEL maintainer="camerondubas@gmail.com"

COPY --from=base /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
