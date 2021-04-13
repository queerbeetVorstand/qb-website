#!/bin/bash

openapi-typescript http://${WEBSITE_HOST}:${DEV_PORT}${CMS_ROOT_PATH}server/specs/oas --output src/generated/openapi.ts --auth $CMS_ADMIN_TOKEN