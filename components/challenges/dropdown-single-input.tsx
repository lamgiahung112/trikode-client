"use client"

import { useAuthentication } from "@/contexts/authentication-context"
import { capitalize, formatEnum } from "@/utilities/format-text"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

interface DropdownSingleInputProps {
	query: "status" | "difficulty"
	values: string[]
	colors?: string[]
}

const DropdownSingleInput: FC<DropdownSingleInputProps> = (
	props: DropdownSingleInputProps
) => {
	const [isOpen, setIsOpen] = useState(false)
	const { user } = useAuthentication()
	const params = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const currentValue = params.get(props.query)
	const isDisabled = !user && props.query === "status"

	const toggle = () => {
		if (isDisabled) return
		setIsOpen(!isOpen)
	}

	const onClickOption = (value: string) => {
		setIsOpen(false)
		const currentParams = new URLSearchParams(Array.from(params))

		if (value !== currentParams.get(props.query)) {
			currentParams.set(props.query, value)
		} else {
			currentParams.delete(props.query)
		}

		router.push(`${pathname}?${currentParams}`)
	}

	return (
		<>
			<div
				onClick={toggle}
				className={twMerge(
					"flex relative items-center justify-between w-full md:max-w-[160px] p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 cursor-pointer",
					isDisabled && "cursor-not-allowed hover:bg-neutral-700"
				)}
			>
				<div
					className={twMerge(
						"text-neutral-400",
						isDisabled && "text-neutral-600"
					)}
				>
					{capitalize(props.query)}
				</div>
				{!isDisabled && (
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
				)}
				{isOpen && (
					<div className="absolute z-[100] top-[48px] left-0 flex flex-col p-2 w-full md:max-w-[200px] bg-neutral-700 rounded-md transition">
						{props.values.map((v, idx) => (
							<div
								key={v}
								onClick={() => onClickOption(v)}
								className="flex justify-between hover:bg-neutral-600 px-2 py-1 rounded-md cursor-pointer"
							>
								<div
									style={{
										color: props.colors && props.colors[idx],
									}}
								>
									{formatEnum(v)}
								</div>
								{currentValue === v && (
									<Image
										src="/check_icon.svg"
										alt=""
										width={20}
										height={20}
									/>
								)}
							</div>
						))}
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

export default DropdownSingleInput
