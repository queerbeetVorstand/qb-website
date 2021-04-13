#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Directus } = require("@directus/sdk");

const directus = new Directus(
  `http://${process.env.WEBSITE_HOST}:${process.env.DEV_PORT}${process.env.CMS_ROOT_PATH}`
);

async function init() {
  // Wait for login to be done...
  await directus.auth.login({
    email: process.env.CMS_ADMIN_EMAIL ?? "",
    password: process.env.CMS_ADMIN_PASSWORD ?? "",
  });

  await directus.users.me.update({
    token: "eit5OiJeiceeYiek8choo6sheipaefa7",
  });
}

if (require.main === module) {
  init()
    .then(() => console.log("CMS database initialization done."))
    .catch((e) =>
      console.error(`CMS database initialization failed with error "${e}"`)
    );
}
