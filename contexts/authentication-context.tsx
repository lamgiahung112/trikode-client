"use client"

import React, { createContext, useContext, useState } from "react"
import * as jose from "jose"

interface UserProps {
	id?: string
	name?: string
	email?: string
	nickname?: string
	role?: "USER" | "ADMIN"
}

interface AuthenticationContextProps {
	user: UserProps
	isUserLoaded: boolean
	credentials?: string | null
	logout: () => void
	loadUserFromCredentials: (creds: string) => void
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
	user: {},
	isUserLoaded: false,
	credentials: null,
	logout() {},
	loadUserFromCredentials(creds) {},
})

const useAuthentication = () => {
	return useContext(AuthenticationContext)
}

const AuthenticationContextProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserProps>({})
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

		if (decryptedData.exp && decryptedData.exp < new Date().getTime()) {
			return
		}

		setIsUserLoaded(true)
		setUser(decryptedData)
		setCredentials(creds)
		localStorage.setItem("__auth__", creds)
	}

	return (
		<AuthenticationContext.Provider
			value={{ user, isUserLoaded, credentials, logout, loadUserFromCredentials }}
		>
			{props.children}
		</AuthenticationContext.Provider>
	)
}

export { AuthenticationContextProvider, useAuthentication }
