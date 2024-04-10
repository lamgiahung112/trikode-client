import { BasicUserSubmission } from "@/types"
import { createStore } from "../store"
import getUserSubmissions from "@/actions/submissions/getUserSubmissions"

type SubmissionListStoreProps = {
	data: BasicUserSubmission[]
	isLoaded: boolean

	loadSubmissionList(challengeId: string): Promise<void>
}

const submissionListStore = createStore<SubmissionListStoreProps>((set) => {
	return {
		data: [],
		isLoaded: false,
		async loadSubmissionList(challengeId) {
			set((prev) => ({ ...prev, isLoaded: false }))
			return getUserSubmissions(challengeId)
				.then((list) => {
					set((prev) => ({
						...prev,
						data: list,
						isLoaded: true,
					}))
				})
				.catch(() => {
					set((prev) => ({ ...prev, isLoaded: true, data: [] }))
				})
		},
	}
})

export default submissionListStore
