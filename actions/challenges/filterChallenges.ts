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

	// normalize params
	const parsedUrlParams: string[] = [
		`page=${params.page}`,
		`pageSize=${params.pageSize}`,
	]

	params.difficulty && parsedUrlParams.push(`difficulty=${params.difficulty}`)
	params.status && parsedUrlParams.push(`status=${params.status}`)
	params.title && parsedUrlParams.push(`title=${params.title}`)
	params.tags && parsedUrlParams.push(params.tags.map((tag) => `tags=${tag}`).join("&"))

	return fetch(`/api/challenges?${parsedUrlParams.join("&")}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((res) => res.payload as Challenge[])
}
