import { HydratedChallenge } from "@/types"

export default async function getChallengeDetails(
	title: string
): Promise<HydratedChallenge> {
	function delay() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(null)
			}, 2000)
		})
	}

	await delay()

	return fetch(
		`http://localhost:3000/api/challenges/details?titleSlug=${encodeURIComponent(
			title
		)}`,
		{
			method: "GET",
		}
	)
		.then((res) => res.json())
		.then((res) => res.payload as HydratedChallenge)
}
