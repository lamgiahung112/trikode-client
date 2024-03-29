import { Skeleton } from "@/components/skeleton"

function ContentSkeleton() {
	const pageSize = 5

	const arr = new Array(pageSize).fill(0)
	return (
		<>
			{arr.map((_, idx) => (
				<div
					key={idx}
					className="flex px-2 py-4 text-sm text-neutral-400 font-medium"
				>
					<div className="flex-[1]">
						<Skeleton className="w-[40%] h-[20px]" />
					</div>
					<div className="flex-[3]">
						<Skeleton className="w-[90%] h-[20px]" />
					</div>
					<div className="flex-[1]">
						<Skeleton className="w-[40%] h-[20px]" />
					</div>
					<div className="flex-[1]">
						<Skeleton className="w-[40%] h-[20px]" />
					</div>
				</div>
			))}
		</>
	)
}

export default ContentSkeleton
