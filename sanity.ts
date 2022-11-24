import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
	//dateset : process.env.NEXT_PUBLIC_SANITY_DATASET,
	dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	useCdn: process.env.NODE_ENV === "production",
} 

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
