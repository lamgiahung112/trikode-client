import { ReactNode } from "react"

function Layout({ children }: { children: ReactNode }) {
	return <div className="py-[32px] px-[16px]">{children}</div>
}

export default Layout
