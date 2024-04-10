import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import "react-toastify/ReactToastify.min.css"
import NavigationBar from "@/components/navigation-bar"
import { ToastContainer } from "react-toastify"
import { AuthenticationContextProvider } from "@/contexts/authentication-context"
import AppModal from "@/components/modals/app-modal"

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
		<html lang="en" suppressHydrationWarning>
			<AuthenticationContextProvider>
				<body className={`${figtree.className} h-[100vh] text-white`}>
					<NavigationBar />
					<ToastContainer position="top-center" />
					<div className="w-full min-h-full bg-neutral-900 pt-0 md:pt-[60px]">
						{children}
					</div>
				</body>
				<AppModal />
			</AuthenticationContextProvider>
		</html>
	)
}
