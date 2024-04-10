import { BasicUserSubmission } from "@/types"

export default async function getUserSubmissions(
	challengeId: string
): Promise<BasicUserSubmission[]> {
	const token = localStorage.getItem("__auth__")

	return fetch(`http://localhost:3000/api/submissions?challengeId=${challengeId}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((res) => res.payload as BasicUserSubmission[])
}
