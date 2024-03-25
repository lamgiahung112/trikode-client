"use client"

import { useAuthentication } from "@/contexts/authentication-context"
import Link from "next/link"

function NavigationBarUserLink() {
	const { user } = useAuthentication()

	if (!user) {
		return (
			<div className="flex gap-x-4 text-neutral-400 text-sm">
				<div className="hover:text-white">
					<Link href="/auth/register">Register</Link>
				</div>
				<div>or</div>
				<div className="hover:text-white">
					<Link href="/auth/sign-in">Sign In</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="flex gap-x-4 text-neutral-400 text-sm">
			Welcome, {user.nickname}
		</div>
	)
}

export default NavigationBarUserLink
