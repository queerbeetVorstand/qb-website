#!/bin/bash

docker-compose -f app/docker-compose.yml up -d database
echo "Waiting for DB to start up"
sleep 2

psql -h localhost directus < db/postgres_schema.sql
psql -h localhost directus < db/postgres_metadata.sql
psql -h localhost directus < db/dev/postgres_data.sql

sudo cp -R db/dev/directus_uploads data

docker-compose -f app/docker-compose.yml up -d