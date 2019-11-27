FROM nginx

MAINTAINER starsriver

COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 9000

ENTRYPOINT service nginx start