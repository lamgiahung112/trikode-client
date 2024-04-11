import { UserSubmission } from "@/types"

export default async function getSubmissionDetails(
	submissionId: string
): Promise<UserSubmission> {
	const token = localStorage.getItem("__auth__")

	return fetch(
		`http://localhost:3000/api/submissions/details?submissionId=${submissionId}`,
		{
			method: "GET",
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	)
		.then((res) => res.json())
		.then((res) => res.payload as UserSubmission)
}
