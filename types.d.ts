import { decl } from "postcss"
import { difficulties, tags, user_challenge_progress_status } from "./utilities/constants"

declare type User = {
	_id: string
	name: string
	excerpt: string
	password: string
	email: string
	nickname: string
	role: "USER" | "ADMIN"
}

declare type Difficulty = (typeof difficulties)[number]
declare type UserChallengeProgressStatus = (typeof user_challenge_progress_status)[number]
declare type Tag = (typeof tags)[number]

declare type Challenge = {
	title: string
	difficulty: Difficulty
	tags: Tag[]
	createdAt: number // long
	submissionCount: number
	acceptanceCount: number
	likeCount: number
}

declare type FilteredChallenge = {
	status?: UserChallengeProgressStatus
} & Challenge

declare type HydratedChallenge = Challenge & {
	details: {
		description: string
		predefinedCode: string
		exampleTestCases: {
			input: string
			expectedOutput: string
		}[]
		constraints: Array<string>
	}
}
