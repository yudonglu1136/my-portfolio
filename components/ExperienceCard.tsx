import React from "react";
import {motion} from "framer-motion";
import {Experience} from "../typings";
import {urlFor} from "../sanity";

type Props = {
	experience: Experience;

};

export default function ExperienceCard({experience}: Props){

	
	console.log(experience?.points);
	return (

	<article className="flex flex-col top-40 rounded-lg items-center
	space-y-7 flex-shrink-0 h-[400px] w-[300px] md:h-[500px] md:w-[400px]  xl:w-[600px] xl:h-[520px] snap-center bg-[#292929] p-10
	hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin 
	scrollbar-track-black scrollbar-thumb-[#F7AB0A]/40 hover:scrollbar-thumb-[#F7AB0A]/60"> 
	<motion.img
		initial ={{
			y: -100,
			opacity: 0,
		}}
		transition={{duration: 1.2}}
		whileInView={{opacity:1, y:0}}
		viewport={{once:true}}
		
		className="w-18 h-18 rounded-full md: w-[120px] md: h-120 xl:w-[150px] xl:h-110 object-cover
		object-center "
		src={urlFor(experience?.companyImage).url()}
		/>

		<div className="px-0 md:px-10 ">
			<h4 className="xl:text-2xl lg:text-2xl text-1xl font-light">{experience?.jobTitle}</h4>
			<p className="font-bold xl:text-2xl lg:text-2xl text-1xl mt-1">{experience?.company}</p>
			
			<div className="flex space-x-2 my-2">
				{experience?.technologies?.map(technology => (
					<img 
					key={technology.id}
					className="h-5 w-5 rounded-full"
					src={urlFor(technology?.image).url()}
					/>
				))}
			
				{/*tech used*/}
			</div>
			<p className="uppercase py-5 text-gray-300 text-1xl">
			{new Date(experience.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? "Present" :
			new Date(experience.dateEnded).toDateString()}
			</p>

			<ul className="flex-none list-disc space-y-2 ml-1 lg:text-lg xl:text-1g text-1xl h-65 ">
				{experience?.points.map( (point, i) =>(
					<li key={i}>{point}</li>))}
			</ul>
		</div>



	</article>);
}


//https://yudonglu.s3.amazonaws.com/Huawei-Logo.png