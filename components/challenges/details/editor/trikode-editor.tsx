"use client"
import { useCallback } from "react"
import ReactCodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { draculaInit } from "@uiw/codemirror-theme-dracula"
import { useStore } from "@/utilities/store"
import challengeDetailsStore from "@/utilities/stores/challenge-details-store"
import SubmitButton from "./submit-button"
import submitChallengeCode from "@/actions/challenges/submitChallengeCode"
import { toast } from "react-toastify"
import { usePathname, useRouter } from "next/navigation"
import editorCodeStore from "@/utilities/stores/editor-code-store"

function TrikodeEditor() {
	const challengeId = useStore(challengeDetailsStore, (store) => store.data?._id)
	const { value: code, setValue: setCode } = useStore(editorCodeStore)
	const pathname = usePathname()
	const router = useRouter()

	const onChange = useCallback((val: string) => setCode(val), [])

	const onSubmit = async () => {
		try {
			await submitChallengeCode(challengeId!, code!)
			toast.success("Your attempt is submitted! Please wait while we process it!")
			router.push(
				`${pathname.substring(0, pathname.lastIndexOf("/") + 1)}/submissions`
			)
		} catch {
			toast.error("Failed to submit your attempt for this challenge!")
		}
	}

	return (
		<form className="flex-[1] flex flex-col" action={onSubmit}>
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
			<SubmitButton />
		</form>
	)
}

export default TrikodeEditor
