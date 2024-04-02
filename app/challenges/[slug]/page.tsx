"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

function Page() {
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		router.push(`${pathname}/description`)
	}, [])

	return <></>
}

export default Page
