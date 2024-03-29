"use client"

import useDebounce from "@/utilities/hooks/useDebounce"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

function SearchBar() {
	const [value, debouncedValue, setValue] = useDebounce(1000, "")
	const params = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const allParams = new URLSearchParams(Array.from(params))

		if (debouncedValue && debouncedValue.length) {
			allParams.set("title", debouncedValue)
		} else allParams.delete("title")

		router.push(`${pathname}?${allParams}`)
	}, [debouncedValue])

	return (
		<div className="flex gap-x-2 items-center p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 cursor-pointer">
			<div>
				<Image src="/search.svg" alt="" height={24} width={24} />
			</div>
			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="bg-transparent outline-none text-neutral-400 min-w-[30vw]"
				/>
			</div>
		</div>
	)
}

export default SearchBar
