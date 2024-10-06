FROM nginx:alpine

# Copy the Nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy all the HTML files to the Nginx web root
COPY . /usr/share/nginx/html
