#openresty
docker login -u sppo55 -p as54156415
mkdir -p /var/git
mkdir -p /var/alex/openresty
cd /var/git
git clone https://github.com/tgfcalex/openresty.git
cd /var/git/openresty
ln -s /var/git/openresty/alex/openresty/nginx /var/alex/openresty/nginx
ln -s /var/git/openresty/alex/openresty/static /var/alex/openresty/static
ln -s /var/git/openresty/alex/ssl /var/alex/ssl
mkdir -p /var/log/
cp -rp /var/git/openresty/nginx /var/log/
chown root:root -R /var/log/nginx
chown root:root -R /var/alex
chmod 777 -R /var/log/nginx
chmod 777 -R /var/git/openresty/alex/openresty/nginx
docker-compose up -d
