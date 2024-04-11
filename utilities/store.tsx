import { useCallback, useSyncExternalStore } from "react"

declare type Store<T> = {
	getState: () => T
	setState: (nextState: StateMapper<T>) => void
	subscribe: (listener: () => void) => () => void
}

declare type StateMapper<T> = (v: T) => T
declare type Selector<T, V = T> = (v: T) => V

declare type CreateStateFnc<T> = (set: (stateMapper: StateMapper<T>) => void) => T

function createStore<T>(createState: CreateStateFnc<T>): Store<T> {
	const getState = () => state
	const setState = (nextState: StateMapper<T>) => {
		state = nextState(state)
		listeners.forEach((l) => l())
	}
	let state = createState(setState)

	const listeners = new Set<() => void>()
	const subscribe = (listener: () => void): (() => void) => {
		listeners.add(listener)
		return () => listeners.delete(listener)
	}

	return { getState, setState, subscribe }
}

function _selfSelector<T, V>(x: T): V {
	return x as unknown as V
}

function useStore<T, V = T>(store: Store<T>, selector: Selector<T, V> = _selfSelector) {
	return useSyncExternalStore(
		store.subscribe,
		useCallback(() => selector(store.getState()), [store, selector]),
		() => selector(store.getState())
	)
}

export { createStore, useStore }
