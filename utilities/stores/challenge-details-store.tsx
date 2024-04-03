import { HydratedChallenge } from "@/types"
import { createStore } from "@/utilities/store"

type ChallengeDetailsStoreProps = HydratedChallenge & {}

const challengeDetailsStore = createStore<ChallengeDetailsStoreProps>((set) => {
	return {
		title: "",
		tags: [],
		submissionCount: 0,
		likeCount: 0,
		difficulty: "EASY",
		details: {
			predefinedCode: "",
			constraints: [],
			description: "",
			exampleTestCases: [],
		},
		acceptanceCount: 0,
		createdAt: 0,
	}
})

export default challengeDetailsStore
