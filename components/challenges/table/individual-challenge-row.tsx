import { Challenge, FilteredChallenge } from "@/types"
import { formatEnum } from "@/utilities/format-text"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface IndividualChallengeRowProps {
	data: FilteredChallenge
}

function IndividualChallengeRow({
	data: { title, difficulty, acceptanceCount, submissionCount, status },
}: IndividualChallengeRowProps) {
	return (
		<div className="flex px-2 py-4 text-sm text-neutral-400 font-medium">
			<div className="flex-[1]">{status ?? ""}</div>
			<Link
				href={`/challenges/${title}`}
				className="flex-[3] text-white hover:text-blue-400 cursor-pointer"
			>
				{title}
			</Link>
			<div className="flex-[1]">
				{submissionCount === 0 ? "0%" : `${acceptanceCount / submissionCount}%`}
			</div>
			<div
				className={twMerge(
					"flex-[1]",
					difficulty === "EASY" && "text-[var(--olive)]",
					difficulty === "MEDIUM" && "text-[var(--yellow)]",
					difficulty === "HARD" && "text-[var(--red)]"
				)}
			>
				{formatEnum(difficulty)}
			</div>
		</div>
	)
}

export default IndividualChallengeRow
