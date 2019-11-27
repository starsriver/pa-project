FROM nginx

MAINTAINER starsriver

COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD cd /usr/echoservice && node index.js

EXPOSE 9000

ENTRYPOINT service nginx start