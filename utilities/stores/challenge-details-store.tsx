import { HydratedChallenge } from "@/types"
import { createStore } from "@/utilities/store"
import editorCodeStore from "./editor-code-store"
import getChallengeDetails from "@/actions/challenges/getChallengeDetails"

type ChallengeDetailsStoreProps = {
	data: HydratedChallenge | null
	isLoaded: boolean
	loadChallenge(slug: string): Promise<void>
}

const challengeDetailsStore = createStore<ChallengeDetailsStoreProps>((set) => {
	return {
		isLoaded: false,
		data: null,
		async loadChallenge(slug) {
			set((prev) => ({
				...prev,
				isLoaded: false,
			}))
			return getChallengeDetails(slug)
				.then((challenge) => {
					editorCodeStore.setState((prev) => {
						return {
							...prev,
							value: challenge.details.predefinedCode,
						}
					})
					set((prev) => {
						return {
							...prev,
							isLoaded: true,
							data: challenge,
						}
					})
				})
				.catch(() => {
					set((prev) => ({
						...prev,
						isLoaded: true,
						data: null,
					}))
				})
		},
	}
})

export default challengeDetailsStore
