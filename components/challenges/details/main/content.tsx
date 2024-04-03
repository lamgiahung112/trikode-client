"use client"

import { useParams } from "next/navigation"
import ChallengeDetails from "./challenge-details"
import SubmissionList from "./submission-list"

function Content() {
	const { tab } = useParams() as { tab: string }
	if (tab === "description") return <ChallengeDetails />
	return <SubmissionList />
}

export default Content
