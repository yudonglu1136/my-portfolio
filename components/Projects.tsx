import React from "react";
import {motion} from "framer-motion";

type Props = {}

function Projects({}: Props){
	const projects = [1,2,3,4,5];
	return (
<motion.div 
	initial={{opacity:0}}
	whileInView={{opacity:1}}
	transition={{duration:1.5}}

	className="h-screen relative flex overflow-hidden flex-col
	text-left md:flex md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
	<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
	 Projects 
	</h3>
	<div className="relative w-full flex overflow-x-scroll overflow-y-hidden
	snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
		{projects.map((project, i) => (
			<div className="w-screen flex-shrink-0 snap-center flex flex-col
			space-y-5 items-center justify-center p-20 md:p-44 h-screen">
				<motion.img
				initial={{opacity:0, y:-300,}}
				whileInView={{opacity:1, y:0}}
				viewport={{once:true}}
				transition={{duration:1.2}}

				src="https://res.cloudinary.com/practicaldev/image/fetch/s--QUb7OYNw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2db0bvcss75exc5es3d.png"

				/>
				<div>
					<h4 className="text-4xl font-semibold">
					<span className="underline decoration-[#F7AB0A]">
					 Case Study {i + 1} of {projects.length} :
					</span>{" "}
					UPS clone
					</h4>
					<p className="text-lg text-center md:text-left">
					Looking for the most talked about TV shows and movies from the around the world? They’re all on Netflix.
					We’ve got award-winning series, movies, documentaries, and stand-up specials. And with the mobile app, you get Netflix while you travel, commute, or just take a break.
					What you’ll love about Netflix:
					</p>
				</div>
			</div>
		))}
		{/*Project*/}
		{/*Project*/}
		{/*Project*/}
		{/*Project*/}
		{/*Project*/}
	</div>
	<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
	-skew-y-12"></div>
</motion.div>);
} 

export default Projects;