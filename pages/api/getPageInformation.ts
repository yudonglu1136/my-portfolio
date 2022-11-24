import type {NextApiRequest, NextApiResponse} from "next";
import {groq} from "next-sanity";
import {sanityClient} from "../../sanity";
import {PageInformation} from "../../typings";

const query = groq`
	*[_type == "pageInformation"][0]
`;
type Data = {
	pageInformation: PageInformation;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
	){

	const pageInformation: PageInformation[] = await sanityClient.fetch(query);
	res.status(200).json({pageInformation});

}