import { parseBuffTime } from 'utils/parseBuffTime'
import { findFirsts } from 'utils/findFirsts'
import { IMaterial } from 'utils/interfaces'
import { parseMonsterParts } from 'utils/parseMonsterParts'

// Returns the extra time from ingredients that give extra time
// on the first occurrence of the ingredient
const extraTimeFromFirst = (array: IMaterial[]) => {
	const uniqueArray = findFirsts(array, 'duration')
	// Gets sum of the `first.duration` value from each ingredient
	return uniqueArray.length && uniqueArray.reduce((acc, item: any) => acc + item.first.duration, 0)
}

// Returns the extra time from ingredients that have a buff
const extraTimeFromBuff = (array: IMaterial[]) => {
	// Runs parseBuffTime on each ingredients `buff.type` and adds the returned
	// value to the baseTime parameter
	let result = 0
	array.forEach((element: any) => {
		const fromBuff = parseBuffTime(((element || {}).buff || {}).type)
		result += fromBuff
	})
	return result
}

const extraTimeFromMonsterParts = (array: IMaterial[]) => {
	const monsterParts = array.filter((item: any) => item.tier)
	let result = 0
	monsterParts.forEach((element: any) => {
		const fromMonsterParts = parseMonsterParts((element || {}).tier)
		result += fromMonsterParts!
	})
	return result
}

// Returns total extra time from all ingredients
export const extraTime = (array: IMaterial[]) => {
	const fromBuff = extraTimeFromBuff(array)
	const fromFirst = extraTimeFromFirst(array)
	const fromMonsterParts = extraTimeFromMonsterParts(array)
	return fromBuff + fromFirst + fromMonsterParts
}
