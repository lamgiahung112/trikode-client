import { Challenge } from "@/types"
import { tags } from "@/utilities/constants"

export default async function filterChallenges(params: {
	page: number
	pageSize: number
	difficulty?: "EASY" | "MEDIUM" | "HARD"
	title?: string
	tags?: (typeof tags)[number][]
	status?: "ATTEMPTED" | "SOLVED"
}): Promise<Challenge[]> {
	const token = localStorage.getItem("__auth__")
	function delay() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(null)
			}, 2000)
		})
	}

	await delay()

	// normalize params
	const parsedUrlParams: string[] = [
		`page=${params.page}`,
		`pageSize=${params.pageSize}`,
	]

	params.difficulty && parsedUrlParams.push(`difficulty=${params.difficulty}`)
	params.status && parsedUrlParams.push(`status=${params.status}`)
	params.title && parsedUrlParams.push(`title=${params.title}`)
	params.tags && parsedUrlParams.push(params.tags.map((tag) => `tags=${tag}`).join("&"))

	return fetch(`http://localhost:3000/api/challenges?${parsedUrlParams.join("&")}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((res) => res.payload as Challenge[])
}
