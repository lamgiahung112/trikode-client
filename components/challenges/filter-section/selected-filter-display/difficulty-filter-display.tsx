"use client"

import { formatEnum } from "@/utilities/format-text"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { twMerge } from "tailwind-merge"

function DifficultyFilterDisplay() {
	const params = useSearchParams()
	const dif = params.get("difficulty")
	const router = useRouter()
	const pathname = usePathname()

	const removeFilter = () => {
		const allParams = new URLSearchParams(Array.from(params))
		allParams.delete("difficulty")
		router.push(`${pathname}?${allParams}`)
	}

	if (!dif) {
		return <></>
	}

	return (
		<div
			className={twMerge(
				"inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700",
				dif === "EASY" && "text-[var(--olive)]",
				dif === "MEDIUM" && "text-[var(--yellow)]",
				dif === "HARD" && "text-[var(--red)]"
			)}
		>
			{formatEnum(dif)}
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

export default DifficultyFilterDisplay
