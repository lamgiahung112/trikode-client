import Image from "next/image"
import Link from "next/link"
import { FunctionComponent } from "react"
import NavigationBarLink from "./navigation-bar-link"
import NavigationBarUserLink from "./navigation-bar-user-link"

interface NavigationBarProps {}

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
	return (
		<div className="flex justify-between px-[20%] fixed invisible md:visible w-full h-[60px] bg-neutral-800 border border-neutral-600">
			<div className="flex items-center gap-x-8">
				<Link href="/">
					<Image src="/leetcode.svg" alt="logo" height={24} width={24} />
				</Link>
				<NavigationBarLink href="/challenges" title="Challenges" />
				<NavigationBarLink href="/profile" title="Profile" />
			</div>
			<div className="flex items-center justify-between">
				<NavigationBarUserLink />
			</div>
		</div>
	)
}

export default NavigationBar
