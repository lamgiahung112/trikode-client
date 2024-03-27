"use client"

import { formatEnum } from "@/utilities/format-text"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

function DifficultyFilterDisplay() {
	const params = useSearchParams()
	const dif = params.get("difficulty")

	if (!dif) {
		return <></>
	}

	return (
		<div className="inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700">
			{formatEnum(dif)}
			<Image src="/cancel.svg" alt="" height={12} width={12} />
		</div>
	)
}

export default DifficultyFilterDisplay
