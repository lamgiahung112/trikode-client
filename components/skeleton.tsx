import { twMerge } from "tailwind-merge"

const Skeleton = ({ className }: { className?: string }) => (
	<div
		className={twMerge(
			className,
			"animate-pulse select-none rounded-md bg-gray-400 leading-none"
		)}
	></div>
)

const SVGSkeleton = ({ className }: { className?: string }) => (
	<svg className={className + " animate-pulse rounded bg-gray-300"} />
)

export { Skeleton, SVGSkeleton }
