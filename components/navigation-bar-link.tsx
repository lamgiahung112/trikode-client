"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FunctionComponent } from "react"
import { twMerge } from "tailwind-merge"

interface NavigationBarLinkProps {
	href: string
	title: string
}

const NavigationBarLink: FunctionComponent<NavigationBarLinkProps> = (props) => {
	const pathname = usePathname()
	return (
		<Link
			href={props.href}
			className={twMerge(
				"relative flex items-center h-full font-medium cursor-pointer hover:text-white",
				pathname.includes(props.href)
					? "text-white font-bold navlink-underline"
					: "text-neutral-400"
			)}
		>
			{props.title}
		</Link>
	)
}

export default NavigationBarLink
