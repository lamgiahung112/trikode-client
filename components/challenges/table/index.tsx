import Content from "./content"
import Header from "./header"

function ChallengeTable() {
	return (
		<div className="flex flex-col w-full">
			<Header />
			<div className="h-[1px] bg-neutral-600 w-full"></div>
			<Content />
		</div>
	)
}

export default ChallengeTable
