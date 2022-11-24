import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler} from "react-hook-form";
type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
}
type Props = {}

function ContactMe({}: Props){
	const {register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Input> = (formData) => {
		window.location.href = `mailto:luyudong1136@gmail.com?subject=${formData.subject}&body=My name is ${formData.name}. ${formData.message} (${formData.email})`
	};
	return (
	<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
	max-w-7xl px-10 justify-evenly mx-auto items-center">
		<h3 className="absolute top-14 uppercase tracking-[20px]
		text-gray-500 text-2xl">Contact Me</h3>
		<div className="flex flex-col space-y-10">
			<h4 className="top-50 text-1xl font-semibold text-center xl:text-2xl lg:text-2xl">
			I have got just what you need! 
			<span className="decoration-[#F7AB0A]/50 underline"> Lets Talk.</span>
			</h4>

			<div className="space-y-10 ">

				<form onSubmit={handleSubmit(onSubmit)}className="flex flex-col space-y-2 w-fit mx-auto">
					<div className="flex space-x-2">
						<input {...register('name')} placeholder="Name" className="contactInput" type="text" /> 
						<input {...register('email')} placeholder="Email" className="contactInput" type="email" />
					</div>

					<input  {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

					<textarea {...register('message')} placeholder="Your message" className="contactInput" />
					<button className="bg-[#F7AB0A] py-5 px-10 rounded-md
					text-black font-bold text-lg transition-all hover:bg-[#F9AB0A] z-20">
					Submit
					</button>

				</form>
				<div className="flex flex-row space-x-10">
					<div className="flex items-center space-x-5 justify-center">
					<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
					<p className="text-2xl">+966 549373696</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
					<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
					<p className="text-2xl">luyudong1136@gmail.com</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
					<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
					<p className="text-2xl">123 Developer Lane</p>
					</div>
				</div>
		

			</div>
		</div>
	</div>
	);
}

export default ContactMe