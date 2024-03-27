import { tags } from "@/utilities/constants"
import { formatEnum } from "@/utilities/format-text"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface MinimalTagDisplayProps {
	tag: (typeof tags)[number]
	onClick?: (tag: (typeof tags)[number]) => void
	active?: boolean
}

const MinimalTagDisplay: FC<MinimalTagDisplayProps> = (props) => {
	return (
		<div
			onClick={() => props.onClick?.call(null, props.tag)}
			className={twMerge(
				"inline-flex items-center text-xs px-2 py-1 rounded-full text-neutral-300 bg-neutral-600 hover:bg-neutral-500",
				props.active ? "bg-blue-500 hover:bg-blue-400 text-white" : undefined
			)}
		>
			{formatEnum(props.tag)}
		</div>
	)
}

export default MinimalTagDisplay
