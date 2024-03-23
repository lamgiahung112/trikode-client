async function verifyUser(token: string) {
	return fetch("/api/auth/verify", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			authorization: token,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (!res.isSuccess) {
				throw new Error(res.message)
			}
		})
}

export default verifyUser
