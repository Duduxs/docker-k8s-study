FROM php:7.4-cli

WORKDIR /var/www

#Installing required dependencies
RUN apt-get update && \ 
	apt-get install libzip-dev -y && \
	docker-php-ext-install zip

#Installing package manager composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
	php composer-setup.php && \
	php -r "unlink('composer-setup.php');"

#Create 'app' project laravel
RUN php composer.phar create-project laravel/laravel app

#put container context folders inside app/ (created by above command)
WORKDIR app/

#Execute project
ENTRYPOINT ["php", "artisan", "serve"]
CMD ["--host=0.0.0.0", "--port=8182"]


