import { HydratedChallenge } from "@/types"

export default async function getChallengeDetails(
	title: string
): Promise<HydratedChallenge> {
	const token = localStorage.getItem("__auth__")

	return fetch(`http://localhost:3000/api/challenges/details?titleSlug=${title}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((res) => res.payload as HydratedChallenge)
}
