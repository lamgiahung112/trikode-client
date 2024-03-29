"use client"
import filterChallenges from "@/actions/challenges/filterChallenges"
import { useAuthentication } from "@/contexts/authentication-context"
import { Challenge } from "@/types"
import { tags } from "@/utilities/constants"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import IndividualChallengeRow from "./individual-challenge-row"
import ContentSkeleton from "./content-skeleton"

function Content() {
	const params = useSearchParams()
	const { isUserLoaded, user } = useAuthentication()
	const shouldLoadStatus = isUserLoaded && !!user
	const [challenges, setChallenges] = useState<Challenge[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		filterChallenges({
			difficulty: params.get("difficulty") as
				| "EASY"
				| "MEDIUM"
				| "HARD"
				| undefined,
			status: shouldLoadStatus
				? (params.get("status") as "ATTEMPTED" | "SOLVED" | undefined)
				: undefined,
			tags: params.getAll("tags") as (typeof tags)[number][] | undefined,
			title: params.get("title") as string | undefined,
		})
			.then((v) => setChallenges(v))
			.then(() => setIsLoading(false))
			.catch((err) => {
				toast.error((err as Error).message)
			})
	}, [params])

	return (
		<>
			{isLoading && <ContentSkeleton />}
			{!isLoading &&
				challenges.map((challenge) => (
					<IndividualChallengeRow key={challenge.title} data={challenge} />
				))}
		</>
	)
}

export default Content
