"use client"

import { tags } from "@/utilities/constants"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import MinimalTagDisplay from "./minimal-tag-display"

const DropdownTagInput = () => {
	const [isOpen, setIsOpen] = useState(false)
	const params = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const allCurrentTags = params.getAll("tags")

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	const onClickOption = (value: (typeof tags)[number]) => {
		setIsOpen(false)
		const currentParams = new URLSearchParams(Array.from(params))
		console.log(currentParams)

		if (allCurrentTags.includes(value)) {
			currentParams.delete("tags")
			allCurrentTags
				.filter((v) => v !== value)
				.forEach((tag) => currentParams.append("tags", tag))
		} else {
			currentParams.append("tags", value)
		}

		router.push(`${pathname}?${currentParams}`)
	}

	return (
		<>
			<div
				onClick={toggle}
				className={twMerge(
					"flex relative items-center justify-between w-full md:max-w-[160px] p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 cursor-pointer"
				)}
			>
				<div className={twMerge("text-neutral-400")}>
					Tags {allCurrentTags.length > 0 && `(${allCurrentTags.length})`}
				</div>
				<div
					className={twMerge(
						"h-[20px] w-[20px] transition",
						isOpen && "rotate-180"
					)}
				>
					<Image
						src={"/chevron_down.svg"}
						alt="chevron"
						height={20}
						width={20}
					/>
				</div>
				{isOpen && (
					<div className="flex-wrap absolute z-[100] top-[48px] left-0 flex p-2 w-full md:w-[200px] gap-2 bg-neutral-700 rounded-md transition">
						{tags.map((t) => {
							return (
								<MinimalTagDisplay
									key={t}
									onClick={onClickOption}
									tag={t}
									active={allCurrentTags.includes(t)}
								/>
							)
						})}
					</div>
				)}
				{isOpen && (
					<div
						className="fixed top-0 left-0 w-screen h-screen bg-transparent z-[10]"
						onClick={toggle}
					></div>
				)}
			</div>
		</>
	)
}

export default DropdownTagInput
