async function verifyUser() {
	const token = localStorage.getItem("__auth__")
	return fetch("/api/auth/verify", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
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

export default verifyUser
