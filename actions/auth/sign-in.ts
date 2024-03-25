async function signInUser(data: FormData) {
	return fetch("/api/auth/signin", {
		method: "POST",
		body: JSON.stringify({
			nickname: data.get("nickname"),
			password: data.get("password"),
		}),
		headers: {
			"content-type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (!res.isSuccess) {
				throw new Error(res.message)
			}
			return res.payload
		})
}

export default signInUser
