import MainContentTabs from "./tabs"

function MainContentSection() {
	return (
		<div className="flex flex-col rounded-md bg-neutral-800 h-[calc(100vh-60px-64px)] border border-neutral-500">
			<MainContentTabs />
			<div className="overflow-y-auto">
				<div className="h-[100vh]">content here</div>
			</div>
			<div>a</div>
		</div>
	)
}

export default MainContentSection
