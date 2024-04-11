import getSubmissionDetails from "@/actions/submissions/getSubmissionDetails"
import { useAuthentication } from "@/contexts/authentication-context"
import { UserSubmission } from "@/types"
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { twMerge } from "tailwind-merge"

type SubmissionDetailsProps = {
	submissionId: string
}

function SubmissionDetails(props: SubmissionDetailsProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState<UserSubmission | null>(null)

	const { user } = useAuthentication()

	useEffect(() => {
		getSubmissionDetails(props.submissionId)
			.then(setData)
			.catch(() => {
				toast.error("Failed to fetch submission details!")
			})
			.finally(() => setIsLoading(false))
	}, [])

	const isPending = data?.isPending
	const isError = !isPending && !data?.isPassed

	const formatDate = useCallback((value: number) => {
		const date = new Date(value)

		return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
			date.getMonth() + 1
		}/${date.getFullYear()}`
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}
	return (
		<div className="flex flex-col gap-y-8">
			<div className="flex flex-col">
				<div
					className={twMerge(
						"flex-[1] text-lg font-medium",
						isPending && "text-[var(--yellow)]",
						isError && "text-[var(--red)]",
						!isError && !isPending && "text-[var(--olive)]"
					)}
				>
					{isPending ? "PENDING" : isError ? data?.error : "ACCEPTED"}
				</div>
				<div className="text-neutral-400">
					<span className="text-white">{user?.name}</span> submitted at{" "}
					{formatDate(data?.createdAt ?? 0)}
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex gap-x-4">
					<div className="text-lg text-neutral-400 font-medium">Results:</div>
					<div className="text-lg">
						{data?.testcasePassedCount}/{data?.totalTestCases} testcases
						passed
					</div>
				</div>
				<div className="flex flex-col">
					<div className="text-lg text-neutral-400 font-medium">Code:</div>
				</div>
			</div>
		</div>
	)
}

export default SubmissionDetails
