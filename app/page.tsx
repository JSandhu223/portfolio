import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-fit md:h-screen flex flex-col bg-white dark:bg-gray-900 pt-16 pb-16">
			<div className="flex-1">
				{/* Left Column - Profile */}
				<div className="md:row-span-1 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Skills Section */}
				<div className="md:row-span-1 flex flex-row justify-center">
					<SkillsSection />
				</div>

				{/* Experience Section */}
				<div className="md:row-span-1 flex flex-row justify-center">
					<ExperienceSection />
				</div>
			</div>
		</main>
	);
}
