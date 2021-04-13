#!/bin/bash

DATA_MODEL_TABLES="directus_(collections|fields|migrations|permissions|relations|roles|settings|webhooks)"

pg_dump -h $WEBSITE_HOST --schema-only > data_model/postgres_schema.sql
pg_dump -h $WEBSITE_HOST --data-only --disable-triggers -t $DATA_MODEL_TABLES > data_model/postgres_data.sql