import React from "react";

import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from 'next/link'
import PageInformation from "../typings";
import {urlFor} from "../sanity";
type Props = {
	pageInformation: PageInformation
};
export default function Hero({pageInformation}: Props){
	const [text, count] = useTypewriter({
		words: [
		`Hi, My name is ${pageInformation?.title}!`,
		"Guy who loves coffee.tsx",
		"<ButLovesToCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	})
	

	return (
	<div className="h-screen flex flex-col space-y-8 items-center 
	justify-center text-center overflow-hidden">
		<BackgroundCircles />
		<img 
		className="relative rounded-full h-36 w-36 mx-auto object-cover"
		src={urlFor(pageInformation?.heroImage).url()}
		/>

		<div className='z-10'>
			<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]" >
			{pageInformation?.role}
			</h2>
			<h1 className="text-4xl lg:text-5xl font-semibold px-10">
				<span className="mr-3">{text}</span>
				<Cursor cursorColor="#F7ABBA" />
			</h1>

			<div className="pt-5">
					<Link href="#about">
					<button className="heroButton">About</button>
					</Link>

					<Link href="#experience">
					<button className="heroButton">Experience</button>
					</Link>

					<Link href="#skills">
					<button className="heroButton">Skills</button>
					</Link>

					<Link href="#projects">
					<button className="heroButton">Projects</button>
					</Link>
			</div>
		</div>
	</div>
	);
}
