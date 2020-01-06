import { useState } from 'react'
import { IMaterial } from 'utils/interfaces'

export const useLocalStorage = (key: string, initialValue: IMaterial[]) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})

	const setValue = (value: Function) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}

	return [storedValue, setValue]
}
