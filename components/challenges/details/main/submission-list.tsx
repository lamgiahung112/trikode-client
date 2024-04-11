import { useStore } from "@/utilities/store"
import challengeDetailsStore from "@/utilities/stores/challenge-details-store"
import modalStore from "@/utilities/stores/modal-store"
import submissionListStore from "@/utilities/stores/submission-list-store"
import { useCallback, useEffect } from "react"
import { toast } from "react-toastify"
import { twMerge } from "tailwind-merge"
import SubmissionDetails from "./submission-details"

function SubmissionList() {
	const { data, isLoaded, loadSubmissionList } = useStore(submissionListStore)
	const challengeId = useStore(challengeDetailsStore, (data) => data.data?._id)
	const openModal = useStore(modalStore, (store) => store.open)

	useEffect(() => {
		if (!challengeId) {
			return
		}

		loadSubmissionList(challengeId).catch(() => {
			toast.error("Failed to fetch your submissions!")
		})
	}, [challengeId])

	const formatDate = useCallback((value: number) => {
		const date = new Date(value)

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
	}, [])

	if (!isLoaded) {
		return <div className="flex-[1]">Loading submissions...</div>
	}
	return (
		<div className="flex-[1] overflow-auto flex flex-col">
			<div className="flex px-4 py-2 justify-between items-start text-neutral-400">
				<div className="flex-[1]">Status</div>
				<div className="flex-[1]">Submitted At</div>
				<div className="flex-[1]">Testcases Passed</div>
			</div>
			<div className="w-full h-[0.1px] bg-neutral-500"></div>
			{data.map((submission, idx) => {
				const isPending = submission.isPending
				const isError = !isPending && !submission.isPassed

				return (
					<div
						key={submission._id}
						onClick={() =>
							openModal({
								component: (
									<SubmissionDetails submissionId={submission._id} />
								),
								title: "Submission Details",
							})
						}
						className={twMerge(
							"flex px-4 py-2 justify-between items-start text-neutral-400 cursor-pointer",
							idx % 2 === 1 ? "bg-neutral-700" : undefined
						)}
					>
						<div
							className={twMerge(
								"flex-[1]",
								isPending && "text-[var(--yellow)]",
								isError && "text-[var(--red)]",
								!isError && !isPending && "text-[var(--olive)]"
							)}
						>
							{isPending
								? "PENDING"
								: isError
								? submission.error
								: "ACCEPTED"}
						</div>
						<div className="flex-[1]">{formatDate(submission.createdAt)}</div>
						<div className="flex-[1]">
							{!submission.testcasePassedCount || !submission.totalTestCases
								? "0"
								: `${submission.testcasePassedCount}/${submission.totalTestCases}`}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default SubmissionList
