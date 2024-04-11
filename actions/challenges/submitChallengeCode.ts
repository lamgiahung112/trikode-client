export default async function submitChallengeCode(
	challengeId: string,
	code: string
): Promise<void> {
	const token = localStorage.getItem("__auth__")

	return fetch(`/api/challenges/submit`, {
		method: "POST",
		body: JSON.stringify({ challengeId, code }),
		headers: {
			authorization: `Bearer ${token}`,
			"content-type": "application/json",
		},
	}).then()
}
