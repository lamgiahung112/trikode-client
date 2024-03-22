"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

function AuthPage() {
	const router = useRouter()

	useEffect(() => {
		router.replace("/auth/sign-in")
	}, [])

	return <></>
}

export default AuthPage
