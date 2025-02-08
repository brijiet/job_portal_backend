#! /bin/bash

sudo cp -rf ~/build/. /var/www/jobportal-backend/

cd /var/www/jobportal-backend/

sudo npm install

sudo npm run build

sudo pm2 restart 0


