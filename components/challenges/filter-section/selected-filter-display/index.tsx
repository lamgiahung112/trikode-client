import DifficultyFilterDisplay from "./difficulty-filter-display"
import StatusFilterDisplay from "./status-filter-display"
import TagsFilterDisplay from "./tags-filter-display"

function SelectedFilterSection() {
	return (
		<div className="flex flex-wrap w-full gap-x-2">
			<DifficultyFilterDisplay />
			<StatusFilterDisplay />
			<TagsFilterDisplay />
		</div>
	)
}

export default SelectedFilterSection
