"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import * as jose from "jose"
import verifyUser from "@/actions/auth/verify"

interface UserProps {
	id?: string
	name?: string
	email?: string
	nickname?: string
	role?: "USER" | "ADMIN"
}

interface AuthenticationContextProps {
	user?: UserProps | null
	isUserLoaded: boolean
	credentials?: string | null
	logout: () => void
	loadUserFromCredentials: (creds: string) => void
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
	user: null,
	isUserLoaded: false,
	credentials: null,
	logout() {},
	loadUserFromCredentials(creds) {},
})

const useAuthentication = () => {
	return useContext(AuthenticationContext)
}

const AuthenticationContextProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserProps | null>()
	const [credentials, setCredentials] = useState<string | null>()
	const [isUserLoaded, setIsUserLoaded] = useState(false)

	function logout() {
		localStorage.removeItem("__auth__")
		setCredentials(null)
		setUser({})
		setIsUserLoaded(true)
	}

	function loadUserFromCredentials(creds: string) {
		const decryptedData = jose.decodeJwt(creds) as jose.JWTPayload & UserProps

		if (decryptedData.exp && decryptedData.exp < new Date().getTime() / 1000) {
			return
		}
		console.log("HERE")
		setIsUserLoaded(true)
		setUser(decryptedData)
		setCredentials(creds)
		localStorage.setItem("__auth__", creds)
	}

	useEffect(() => {
		const localToken = localStorage.getItem("__auth__")
		if (!isUserLoaded && localToken) {
			verifyUser("Bearer " + localToken).then(() => {
				loadUserFromCredentials(localToken)
			})
		}
	}, [])

	return (
		<AuthenticationContext.Provider
			value={{ user, isUserLoaded, credentials, logout, loadUserFromCredentials }}
		>
			{props.children}
		</AuthenticationContext.Provider>
	)
}

export { AuthenticationContextProvider, useAuthentication }
