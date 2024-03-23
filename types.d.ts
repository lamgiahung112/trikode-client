declare type User = {
	_id: string
	name: string
	excerpt: string
	password: string
	email: string
	nickname: string
	role: "USER" | "ADMIN"
}
