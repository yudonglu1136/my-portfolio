import {PageInformation} from "../typings";

export const fetchPageInformation = async() => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInformation`)
	const data = await res.json();
	const info : PageInformation[] = data.pageInformation;
	return info
}