import ChallengeFilterSection from "@/components/challenges/challenge-filter-section"
import ChallengeFilterSectionSkeleton from "@/components/challenges/challenge-filter-section-skeleton"
import { Suspense } from "react"

function ChallengePage() {
	return (
		<div className="flex flex-col w-full gap-y-2">
			<Suspense fallback={<ChallengeFilterSectionSkeleton />}>
				<ChallengeFilterSection />
			</Suspense>
		</div>
	)
}

export default ChallengePage
