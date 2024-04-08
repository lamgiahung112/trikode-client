import { createStore } from "../store"

type EditorCodeStoreProps = {
	value: string
	setValue(v: string): void
}

const editorCodeStore = createStore<EditorCodeStoreProps>((set) => {
	return {
		value: "",
		setValue(v) {
			set((prev) => ({ ...prev, value: v }))
		},
	}
})

export default editorCodeStore
