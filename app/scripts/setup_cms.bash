#!/bin/bash

docker-compose -f app/docker-compose.yml up -d
echo "Waiting for services to start up"
sleep 2

docker exec directus npx directus users create --email $CMS_ADMIN_EMAIL --password $CMS_ADMIN_PASSWORD --role 33290ee0-c865-4a80-82a2-91ed4492d521
node app/scripts/init_cms.js