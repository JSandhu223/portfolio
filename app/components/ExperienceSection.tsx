const ExperienceSection = () => {
	const experiences = [
		{
			project: 'Friend Game Matcher',
			image: "https://images7.alphacoders.com/133/1339892.png",
			link: 'https://github.com/JSandhu223/game-matcher',
			appType: 'Blazor App',
			techStack: 'Blazor, C#',
			description: 'A web app for helping friend groups (or strangers) looking to find common game interests. Uses the Steam Web API to collect user profiles, friend lists, and game libraries.',
		},
		{
			project: 'RPG in Unreal Engine (Ongoing)',
			image: "https://external-preview.redd.it/g-x5gzLtseLf2AoW4cp0nhrS8V6hIQY0DYJYI5WARFw.jpg?width=640&crop=smart&auto=webp&s=ed48ec7a6e678b6ac8fe630257da83aac81ad108",
			link: 'https://github.com/JSandhu223/unreal-rpg',
			appType: 'Game',
			techStack: 'Unreal Engine 5, C++',
			description: 'An action RPG that implements complex gameplay systems and interactions, with support for co-op multiplayer. Utilizes the Gameplay Ability System Framework to enforce strong software design patterns, ensuring a scalable and maintainable codebase.',
		},
		{
			project: 'Collaboration App for Artists',
			image: "https://raw.githubusercontent.com/J-essicaTran/inklink/refs/heads/main/public/logo.png",
			link: 'https://github.com/J-essicaTran/inklink',
			appType: 'Web App',
			techStack: 'NextJS, React, Typescript, Firebase',
			description: 'A journaling app for artists to upload artwork and collaborate. Integrates Google Firebase services such as firestore database, authentication, and storage buckets.',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-black px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				{/* <div className="grid grid-cols-2 gap-2"> */}
					{/* {experiences.map((exp) => ( */}
						{/* <div key={exp.appType} className="h-96 border-solid border-2 border-white px-5 pb-2 rounded-md"> */}
								{/* <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" /> */}
								{/* <h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.project}</h4> */}
								{/* <a href={exp.link} target="_blank" className="flex flex-col justify-center items-center text-lg font-medium text-gray-900 dark:text-white hover:underline"> */}
									{/* <img className="w-fit h-5/6" src={exp.image}></img> */}
									{/* <p>{exp.project}</p> */}
								{/* </a> */}
								{/* <span className="flex flex-row-reverse text-sm italic text-gray-500 dark:text-gray-400">{exp.techStack}</span> */}
								{/* <div></div> */}
								{/* <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.appType}</p> */}
								{/* <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p> */}
						{/* </div> */}
					{/* ))} */}
				{/* </div> */}

				<div className="flex flex-wrap justify-start gap-6">
					{experiences.map((exp) => (
						<div key={exp.appType} className="border-solid border border-white rounded-md hover:border-blue-800 bg-gray-100 dark:bg-black overflow-hidden w-full flex flex-row">
							<a href={exp.link} target="_blank" className="hover:bg-gray-200 dark:hover:bg-blue-950">
								<div className="p-4">
									{/* <img className="" src={exp.image}></img> */}
									<span className="flex justify-between">
										<h2 className="text-black dark:text-white">{exp.project}</h2>
										<p className="text-sm italic text-black dark:text-white leading-relaxed">{exp.techStack}</p>
									</span>
									<p className="mt-auto mb-auto pt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
