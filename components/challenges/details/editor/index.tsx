import Title from "./title"
import TrikodeEditor from "./trikode-editor"

function EditorSecion() {
	return (
		<div className="flex flex-col rounded-md bg-neutral-800 h-[calc(100vh-60px-64px)] border border-neutral-500">
			<Title />
			<TrikodeEditor />
		</div>
	)
}

export default EditorSecion
