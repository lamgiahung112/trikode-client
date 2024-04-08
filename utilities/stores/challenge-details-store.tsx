import { HydratedChallenge } from "@/types"
import { createStore } from "@/utilities/store"
import editorCodeStore from "./editor-code-store"

type ChallengeDetailsStoreProps = {
	data: HydratedChallenge | null
	isLoaded: boolean
	setChallenge(challenge: HydratedChallenge): void
}

const challengeDetailsStore = createStore<ChallengeDetailsStoreProps>((set) => {
	return {
		isLoaded: false,
		data: null,
		setChallenge(challenge) {
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
		},
	}
})

export default challengeDetailsStore
