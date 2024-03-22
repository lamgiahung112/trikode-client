import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import NavigationBar from "@/components/navigation-bar"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Trikode",
	description: "Trikode - Coding challenge platform!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${figtree.className} h-[100vh] text-white`}>
				<NavigationBar />
				<div className="w-full min-h-full bg-neutral-900 pt-0 md:pt-[62px]">
					{children}
				</div>
			</body>
		</html>
	)
}
