import React from "react";
import {motion} from "framer-motion";
import SkillCard from "./SkillCard";
import {Skill} from "../typings";

type Props = {
	skills: Skill[]
}

function Skills({skills}: Props){

	return (
		<motion.div 

		className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
		xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
		<h3 className="absolute mb-10 top-24 uppercase 
		tracking-[20px] text-gray-500 text-2xl">Skills</h3>

		<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"> Hover over a skill for current proficiency</h3>
		<div className="top-99 grid grid-cols-4 gap-5">

		{skills.slice(0, skills.length/2)?.map((skill,i) => (
			
			<SkillCard key={skill._id} skill={skill} directionLeft={false}/>
		))}
		{skills.slice(skills.length/2, skills.length)?.map((skill,i) => (
			
			<SkillCard key={skill._id} skill={skill} directionLeft={true} />
		))}

		</div>
		</motion.div>
	);
}

export default Skills;