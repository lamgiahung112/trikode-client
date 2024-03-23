async function registerUser(data: FormData) {
	return fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify({
			nickname: data.get("nickname"),
			email: data.get("email"),
			password: data.get("password"),
			excerpt: data.get("excerpt"),
			name: data.get("name"),
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
		})
}

export default registerUser
