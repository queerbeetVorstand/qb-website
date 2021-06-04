import { Directus } from "@directus/sdk";
import { ItemTypes } from "@/types/api";

const apiAddress = process.browser ? process.env.NEXT_PUBLIC_CMS_URL : process.env.CMS_URL;
if(!apiAddress) throw "Either set $NEXT_PUBLIC_CMS_URL or $CMS_URL environment variable!";

const client = new Directus<ItemTypes>(apiAddress);

export default client;
