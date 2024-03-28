"use client"

import { tags } from "@/utilities/constants"
import { formatEnum } from "@/utilities/format-text"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function TagsFilterDisplay() {
	const params = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()
	const currentTags = params.getAll("tags") as (typeof tags)[number][]

	const removeFilter = (value: (typeof tags)[number]) => {
		const allParams = new URLSearchParams(Array.from(params))
		allParams.delete("tags")
		currentTags
			.filter((v) => v !== value)
			.forEach((tag) => allParams.append("tags", tag))

		router.push(`${pathname}?${allParams}`)
	}

	if (!currentTags) {
		return <></>
	}

	return (
		<>
			{currentTags.map((tag) => {
				return (
					<div className="inline-flex items-center gap-x-2 text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-700">
						{formatEnum(tag)}
						<Image
							className="cursor-pointer"
							src="/cancel.svg"
							alt=""
							height={12}
							width={12}
							onClick={() => removeFilter(tag)}
						/>
					</div>
				)
			})}
		</>
	)
}

export default TagsFilterDisplay
