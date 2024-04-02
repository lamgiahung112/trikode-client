import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
	title: "Challenges - Trikode",
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full min-h-[calc(100vh-60px)] overflow-y-hidden bg-neutral-900">
			{children}
		</div>
	)
}
