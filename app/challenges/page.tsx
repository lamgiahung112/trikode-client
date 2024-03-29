import ChallengeFilterSection from "@/components/challenges/filter-section"
import ChallengeFilterSectionSkeleton from "@/components/challenges/filter-section/filter-skeleton"
import ChallengeTable from "@/components/challenges/table"
import SelectedFilterSection from "@/components/challenges/filter-section/selected-filter-display"
import { Suspense } from "react"

function ChallengePage() {
	return (
		<div className="flex flex-col w-full gap-y-4">
			<Suspense fallback={<ChallengeFilterSectionSkeleton />}>
				<ChallengeFilterSection />
				<SelectedFilterSection />
			</Suspense>
			<Suspense>
				<ChallengeTable />
			</Suspense>
		</div>
	)
}

export default ChallengePage
