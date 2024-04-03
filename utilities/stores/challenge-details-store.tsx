import { HydratedChallenge } from "@/types"
import { createStore } from "@/utilities/store"

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
