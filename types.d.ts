import { decl } from "postcss"
import { tags } from "./utilities/constants"

declare type User = {
	_id: string
	name: string
	excerpt: string
	password: string
	email: string
	nickname: string
	role: "USER" | "ADMIN"
}

declare type Difficulty = "EASY" | "MEDIUM" | "HARD"

declare type Challenge = {
	title: string
	difficulty: Difficulty
	tags: Tag[]
	challengeDetails: string
	createdAt: number // long
	submissionCount: number
	acceptanceCount: number
	likeCount: number
}
