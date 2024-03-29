import { getColor } from "@/utilities/tailwind-utilities"
import DropdownSingleInput from "./single-input"
import DropdownTagInput from "./multiple-input/dropdown-tag-input"
import SearchBar from "./search-bar"

function ChallengeFilterSection() {
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

export default ChallengeFilterSection
