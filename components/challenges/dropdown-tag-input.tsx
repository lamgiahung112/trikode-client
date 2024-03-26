"use client"

import { useAuthentication } from "@/contexts/authentication-context"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

const DropdownTagInput = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { user } = useAuthentication()
	const params = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	const onClickOption = (value: string) => {
		setIsOpen(false)
		const currentParams = new URLSearchParams(Array.from(params))

		// if (value !== currentParams.get(props.query)) {
		// 	currentParams.set(props.query, value)
		// } else {
		// 	currentParams.delete(props.query)
		// }

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
				<div className={twMerge("text-neutral-400")}>Tags</div>
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
					<div className="absolute z-[100] top-[48px] left-0 flex flex-col p-2 w-full md:max-w-[200px] bg-neutral-700 rounded-md transition"></div>
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
