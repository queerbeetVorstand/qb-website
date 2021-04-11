FROM node:alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

VOLUME /nextjs
WORKDIR /nextjs

# Prepare for receiving the project folder as volume

# Install dependencies only when needed
RUN yarn install --frozen-lockfile

# Expose port and run development server
EXPOSE 3000
CMD ["yarn", "run", "dockerized_dev"]
