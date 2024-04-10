"use client"

import { notFound, useParams } from "next/navigation"
import ChallengeDetails from "./challenge-details"
import SubmissionList from "./submission-list"
import { useStore } from "@/utilities/store"
import challengeDetailsStore from "@/utilities/stores/challenge-details-store"
import { useEffect } from "react"
import { toast } from "react-toastify"

function Content() {
	const { tab, slug } = useParams() as { tab: string; slug: string }
	const { data, isLoaded, loadChallenge } = useStore(challengeDetailsStore)

	useEffect(() => {
		if (data && slug === encodeURIComponent(data.title) && isLoaded) {
			return
		}

		loadChallenge(slug).catch(() => {
			toast.error("Couldn't find this challenge")
			notFound()
		})
	}, [])

	if (tab === "description") return <ChallengeDetails />
	return <SubmissionList />
}

export default Content
