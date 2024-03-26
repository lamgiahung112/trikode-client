import { useEffect, useState } from "react"

function useDebounce<T>(debounceMs: number, defaultValue?: T) {
	const [value, setValue] = useState(defaultValue)
	const [debouncedValue, setDebouncedValue] = useState(defaultValue)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value)
		}, debounceMs)

		return () => clearTimeout(timer)
	}, [value])

	return [value, debouncedValue, setValue] as const
}

export default useDebounce
