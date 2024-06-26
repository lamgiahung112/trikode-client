"use client"

import { useStore } from "@/utilities/store"
import challengeDetailsStore from "@/utilities/stores/challenge-details-store"
import { twMerge } from "tailwind-merge"
import { formatEnum } from "@/utilities/format-text"

function ChallengeDetails() {
	const { data, isLoaded } = useStore(challengeDetailsStore)

	if (!isLoaded) {
		return <div className="flex-[1]">Loading...</div>
	}

	return (
		<div className="flex-[1] overflow-y-auto w-full flex flex-col p-4 gap-y-6">
			<div className="text-2xl">{data?.title}</div>
			<div className="flex gap-x-2 gap-y-2 flex-wrap">
				<div
					className={twMerge(
						"inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700",
						data?.difficulty === "EASY" && "text-[var(--olive)]",
						data?.difficulty === "MEDIUM" && "text-[var(--yellow)]",
						data?.difficulty === "HARD" && "text-[var(--red)]"
					)}
				>
					{formatEnum(data?.difficulty ?? "")}
				</div>
				{data?.status && (
					<div
						className={twMerge(
							"inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700",
							data?.status === "SOLVED" && "text-[var(--olive)]",
							data?.status === "ATTEMPTED" && "text-[var(--yellow)]"
						)}
					>
						{formatEnum(data?.status ?? "")}
					</div>
				)}
				{data?.tags.map((tag) => (
					<div
						key={tag}
						className="inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700"
					>
						{formatEnum(tag)}
					</div>
				))}
			</div>
			<div className="flex flex-col gap-y-1">
				{data?.details.description.split("\n").map((part) => (
					<div key={part} className="text-sm">
						{part}
					</div>
				))}
			</div>

			<div>
				{data?.details.exampleTestCases.map((test, idx) => (
					<div key={test.input} className="flex flex-col gap-y-2">
						<div className="font-semibold">Example {idx + 1}:</div>
						<div className="flex flex-col px-2 border-l border-neutral-400 font-semibold">
							<div>
								Input:{" "}
								<span className="text-neutral-400">{test.input}</span>
							</div>
							<div>
								Expected output:{" "}
								<span className="text-neutral-400">
									{test.expectedOutput}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-y-2">
				<div className="font-semibold">Contraints</div>
				<div className="list-disc flex-shrink">
					{data?.details.constraints.map((con) => (
						<div className="flex gap-x-2" key={con}>
							-
							<li className="inline-flex items-center bg-neutral-700 rounded-md px-2">
								{con}
							</li>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-x-4 items-end">
				<div className="text-sm text-neutral-400">Accepted</div>
				<div>{data?.acceptanceCount}</div>
				<div className="text-neutral-400">|</div>
				<div className="text-sm text-neutral-400">Submissions</div>
				<div>{data?.submissionCount}</div>
				<div className="text-neutral-400">|</div>
				<div className="text-sm text-neutral-400">Acceptance Rate</div>
				<div>
					{!data?.submissionCount
						? 0
						: (data.acceptanceCount / data.submissionCount).toFixed(2)}
					%
				</div>
			</div>
		</div>
	)
}

export default ChallengeDetails
