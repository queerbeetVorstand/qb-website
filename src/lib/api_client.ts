import { Directus } from "@directus/sdk";
import { ItemTypes } from "@/types/api";

const apiAddress = process.browser ? process.env.NEXT_PUBLIC_DIRECTUS_ADDRESS : process.env.DIRECTUS_ADDRESS;
if(!apiAddress) throw "Either set $DIRECTUS_ADDRESS or $NEXT_PUBLIC_DIRECTUS_ADDRESS environment variable!";

const client = new Directus<ItemTypes>(apiAddress);

export default client;
