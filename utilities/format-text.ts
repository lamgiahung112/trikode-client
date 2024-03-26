const formatEnum = (value: string) => {
	const firstStep = value.replaceAll("_", " ")
	return capitalize(firstStep)
}

const capitalize = (value: string) =>
	value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

export { formatEnum, capitalize }
