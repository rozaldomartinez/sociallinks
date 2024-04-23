import Image from "next/image";

export default function Home() {
	return (
		<div className = "flex align-middle items-center min-h-screen justify-center">
			<div className = "bg-mentor-darkgrey pl-12 pr-12 pb-10 pt-8 w-96 text-center rounded-2xl">
				<Image 
					src="/avatar-jessica.jpeg"
					width={75}
					height={75}
					alt="Picture of the author"
					className="rounded-full ml-auto mr-auto mb-7"
				/>
				<p className = "text-white mb-1 text-2xl">Jessica Randall</p>
				<p className = "text-mentor-green mb-6 text-sm">London, United Kingdom</p>
				<p className = "text-white mb-5 text-sm">"Front-end developer and avid reader."</p>
				<a href = "#" className = "w-auto bg-mentor-grey text-white block mb-4 rounded-md p-2 hover:bg-mentor-darkgrey">GitHub</a>
				<a href = "#" className = "w-auto bg-mentor-grey text-white block mb-4 rounded-md p-2 hover:bg-mentor-darkgrey">Frontend Mentor</a>
				<a href = "#" className = "w-auto bg-mentor-grey text-white block mb-4 rounded-md p-2 hover:bg-mentor-darkgrey">LinkedIn</a>
				<a href = "#" className = "w-auto bg-mentor-grey text-white block mb-4 rounded-md p-2 hover:bg-mentor-darkgrey">Twitter</a>
				<a href = "#" className = "w-auto bg-mentor-grey text-white block rounded-md p-2 hover:bg-mentor-darkgrey">Instagram</a>
			</div>
		</div>	
	);
}
