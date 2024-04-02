"use client"

import { ReactNode } from "react"
import Split from "react-split"

function ContentSplitter({ children }: { children: ReactNode[] }) {
	return (
		<Split
			className="flex"
			sizes={[50, 50]}
			minSize={500}
			expandToMin={false}
			gutterSize={5}
			gutterAlign="center"
			snapOffset={30}
			dragInterval={1}
		>
			<div className="w-full">{children[0]}</div>
			<div className="w-full">{children[1]}</div>
		</Split>
	)
}

export default ContentSplitter
