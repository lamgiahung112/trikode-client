type Color = "olive" | "yellow" | "red"

const getColor = (name: Color) => `var(--${name})`

export { getColor }
