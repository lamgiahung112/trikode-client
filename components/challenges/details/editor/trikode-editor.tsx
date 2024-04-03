"use client"
import { useCallback, useState } from "react"
import ReactCodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { draculaInit } from "@uiw/codemirror-theme-dracula"

function TrikodeEditor() {
	const [code, setCode] = useState("")

	const onChange = useCallback((val: string) => setCode(val), [])

	return (
		<ReactCodeMirror
			className="flex-[1] overflow-y-auto overflow-x-auto"
			value={code}
			onChange={onChange}
			height="100%"
			extensions={[javascript({ jsx: false, typescript: false })]}
			theme={draculaInit({
				settings: {
					background: "rgb(38, 38, 38)",
					lineHighlight: "rgb(38, 38, 38)",
					gutterBackground: "rgb(38, 38, 38)",
				},
			})}
		/>
	)
}

export default TrikodeEditor
