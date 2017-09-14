FROM nginx:1.10.0-alpine
MAINTAINER Graham Baitson <grahambaitson@gmail.com>

EXPOSE 80

# Install UI
WORKDIR /opt/fa
COPY build/dist .

# Set Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY fa-gb-ui.conf /etc/nginx/conf.d/
COPY credentials /etc/nginx/.htpasswd
