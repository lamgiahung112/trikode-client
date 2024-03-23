import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	const body = await request.json()

	try {
		const res = await fetch("http://localhost:3001/api/auth/signup", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"content-type": "application/json",
			},
		})
		const resBody = await res.json()
		return NextResponse.json(resBody)
	} catch (error) {
		return NextResponse.error()
	}
}
