FROM nginx:alpine
LABEL maintainer="camerondubas@gmail.com"

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
