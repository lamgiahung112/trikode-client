function FilterSkeleton() {
	return (
		<div className="flex w-full gap-x-2 h-[40px]">
			<div className="w-full md:max-w-[160px] h-[40px] rounded-md bg-gray-300 animate-pulse" />
			<div className="w-full md:max-w-[160px] h-[40px] rounded-md bg-gray-300 animate-pulse" />
			<div className="w-full md:max-w-[160px] h-[40px] rounded-md bg-gray-300 animate-pulse" />
			<div className="w-full md:min-w-[30vw] h-[40px] rounded-md bg-gray-300 animate-pulse" />
		</div>
	)
}

export default FilterSkeleton
