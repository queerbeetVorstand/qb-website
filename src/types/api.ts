import { components } from "@/generated/openapi";

// Give more sensible names to API data types.
export type About = components["schemas"]["ItemsAbout"];

// Map openapi item types to its respective collections. The SDK will
// infer its types based on usage later.
export type ItemTypes = {
  // [collection_name]: typescript_type
  about: About;
};
