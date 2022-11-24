import React from "react";
import {motion} from "framer-motion";
import {Project} from "../typings";
import {urlFor} from "../sanity";

type Props = {
	projects: Project[];
}

function Projects({projects}: Props){
	
	return (
<motion.div 
	initial={{opacity:0}}
	whileInView={{opacity:1}}
	transition={{duration:1.5}}

	className="h-screen relative flex overflow-hidden flex-col
	text-left md:flex md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
	<h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
	 Projects 
	</h3>
	<div className="relative w-full flex overflow-x-scroll overflow-y-hidden
	snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
		{projects.map((project, i) => (
			<div key={project?._id}className="w-screen flex-shrink-0 snap-center flex flex-col
			space-y-5 items-center justify-center p-20 md:p-44 h-screen">
				<motion.img
				initial={{opacity:0, y:-300,}}
				whileInView={{opacity:1, y:0}}
				viewport={{once:true}}
				transition={{duration:1.2}}
				className="relative h-[200px] w=[200px] sm:h-[200px] sm:w-[200px] lg: h-[280px] lg: w-[280px]
				xl:h-[320px] xl:w-[320px] md:h-[200px] md:w-[200px]"

				src={urlFor(project?.image).url()}
				/>

				<div>
					<h4 className="xl:text-4xl lg:text-4xl text-2xl font-semibold">
					<span className="underline decoration-[#F7AB0A]">
					 Case Study {i + 1} of {projects.length} :
					</span>{" "}
					{project?.title}
					</h4>
					<div className="flex items-center space-x-2 justify-center">
					{project?.technologies?.map(technology => (
						<img key={technology?._id}
						className="h-10 w-10 rounded-full z-10 hover:h-12 hover:w-12"
						src={urlFor(technology?.image).url()} 
						/>
					))}
					</div>
					<p className="text-lg text-center md:text-left">
					{project?.summary}
					</p>
				</div>
			</div>
		))}

	</div>
	<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
	-skew-y-12"></div>
</motion.div>);
} 

export default Projects;