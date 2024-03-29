"use client"

import { useAuthentication } from "@/contexts/authentication-context"
import { formatEnum } from "@/utilities/format-text"
import Image from "next/image"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"

function StatusFilterDisplay() {
	const params = useSearchParams()
	const { isUserLoaded, user } = useAuthentication()
	const router = useRouter()
	const pathname = usePathname()
	const status = params.get("status")

	useEffect(() => {
		if (isUserLoaded && !user) {
			const allParams = new URLSearchParams(Array.from(params))
			allParams.delete("status")
			router.push(`${pathname}?${allParams}`)
		}
	}, [isUserLoaded])

	const removeFilter = () => {
		const allParams = new URLSearchParams(Array.from(params))
		allParams.delete("status")
		router.push(`${pathname}?${allParams}`)
	}

	if (!status) {
		return <></>
	}

	return (
		<div
			className={twMerge(
				"inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700",
				status === "SOLVED" && "text-[var(--olive)]",
				status === "ATTEMPTED" && "text-[var(--yellow)]"
			)}
		>
			{formatEnum(status)}
			<Image
				className="cursor-pointer"
				src="/cancel.svg"
				alt=""
				height={12}
				width={12}
				onClick={removeFilter}
			/>
		</div>
	)
}

export default StatusFilterDisplay
