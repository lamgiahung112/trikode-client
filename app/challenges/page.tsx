import DropdownSingleInput from "@/components/challenges/dropdown-single-input"
import DropdownTagInput from "@/components/challenges/dropdown-tag-input"
import SearchBar from "@/components/challenges/search-bar"
import { getColor } from "@/utilities/tailwind-utilities"

function ChallengePage() {
	return (
		<div className="flex w-full gap-x-2">
			<DropdownSingleInput
				values={["EASY", "MEDIUM", "HARD"]}
				colors={[getColor("olive"), getColor("yellow"), getColor("red")]}
				query="difficulty"
			/>
			<DropdownSingleInput
				values={["ATTEMPTED", "SOLVED"]}
				colors={[getColor("yellow"), getColor("olive")]}
				query="status"
			/>
			<DropdownTagInput />
			<SearchBar />
		</div>
	)
}

export default ChallengePage
