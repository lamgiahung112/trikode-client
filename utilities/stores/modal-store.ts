import { createStore } from "../store"

type ModalStoreProps = {
	isOpen: boolean
	component: React.JSX.Element | null
	title: string

	open({ component, title }: { component: React.JSX.Element; title: string }): void
	close(): void
}

const modalStore = createStore<ModalStoreProps>((set) => {
	return {
		isOpen: false,
		component: null,
		title: "",
		open({ component, title }) {
			set((prev) => ({ ...prev, component, title, isOpen: true }))
		},
		close() {
			set((prev) => ({
				...prev,
				component: null,
				isOpen: false,
				title: "",
			}))
		},
	}
})

export default modalStore
