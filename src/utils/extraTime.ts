import { parseBuffTime } from './parseBuffTime'
import { findFirsts } from './findFirsts'

// Returns the extra time from ingredients that give extra time
// on the first occurrence of the ingredient
const extraTimeFromFirst = (array: Array<object>, baseTime: number) => {
	const uniqueArray = findFirsts(array, 'duration')

	// Gets the `first.duration` value from each ingredient and adds them
	// to the baseTime parameter
	uniqueArray.forEach((element: any) => {
		const fromFirst = ((element || {}).first || {}).duration
		baseTime += fromFirst
	})

	return baseTime
}

// Returns the extra time from ingredients that have a buff
const extraTimeFromBuff = (array: Array<object>, baseTime: number) => {
	// Runs parseBuffTime on each ingredients `buff.type` and adds the returned
	// value to the baseTime parameter
	array.forEach((element: any) => {
		const fromBuff = parseBuffTime(((element || {}).buff || {}).type)
		baseTime += fromBuff
	})
	return baseTime
}

// Returns total extra time from all ingredients
export const extraTime = (array: Array<object>) => {
	let time = 0
	const fromBuff = extraTimeFromBuff(array, time)
	const fromFirst = extraTimeFromFirst(array, time)
	return fromBuff + fromFirst
}
