# Use an ARM64-compatible base image
FROM arm64v8/php:7.4-apache

# Set the working directory
WORKDIR /var/www/html

# Install required packages
RUN apt-get update && apt-get install -y \
    wget \
    unzip

# Download and install WordPress
RUN wget https://wordpress.org/latest.tar.gz && \
    tar -xzvf latest.tar.gz --strip 1 && \
    rm latest.tar.gz

# Expose port
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
