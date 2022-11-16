import React from "react";
import {motion} from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props){
	return (

	<article className="flex flex-col rounded-lg items-center
	space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px]  snap-center bg-[#292929] p-10
	hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"> 
	<motion.img
		initial ={{
			y: -100,
			opacity: 0,
		}}
		transition={{duration: 1.2}}
		whileInView={{opacity:1, y:0}}
		viewport={{once:true}}
		
		className="w-22 h-22 rounded-full md: w-[150px] md: h-[150px] xl:w-[150px] xl:h-[150px] object-cover
		object-center "
		src="https://yudonglu.s3.amazonaws.com/youview-logo.jpeg"
		/>

		<div className="px-0 md:px-10 ">
			<h4 className="text-2xl font-light">Software Development Intern</h4>
			<p className="font-bold text-1.5xl mt-1">YouView</p>
			
			<div className="flex space-x-2 my-2">
			<img className="h-5 w-5 rounded-full"
				src="https://yudonglu.s3.amazonaws.com/279-2791029_python-icon-python-logo.jpeg"
			/>
				{/*tech used*/}
			</div>
			<p className="uppercase py-5 text-gray-300 text-1xl">Started work - Ended</p>

			<ul className="list-disc space-y-4 ml-5 text-lg h-50 overflow-y-scroll">
				<li>summary summary summary</li>
				<li>summary summary summary summary</li>
				<li>summary summary summary summary</li>
				<li>summary summary summary summary</li>
				<li>summary summary summary summary</li>
				<li>summary summary summary summary</li>

			</ul>
		</div>



	</article>);
}


//https://yudonglu.s3.amazonaws.com/Huawei-Logo.png