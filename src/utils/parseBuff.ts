import { IMaterial } from './interfaces'

export const parseBuff = (array: IMaterial[]) => {
	// Array of buff values for current ingredients
	const buffs = array.map((item: IMaterial) => (item || {}).buff)
	// Removes any that have null buff type
	const nullsRemoved = buffs.filter(({ type }) => type !== null)
	// Array of the buff types as strings, duplicates removed
	const buffTypes = Array.from(new Set(nullsRemoved.map(({ type }) => type)))
	// If multiple buff types are added they'll cancel each other
	// in-game and no buff will be added
	if (buffTypes.length > 1) return null
	// Sum of buff potencies
	const potency = nullsRemoved.length && nullsRemoved.reduce((acc, item: any) => acc + item.potency, 0)
	return {
		type: buffTypes[0] || null,
		potency: potency
	}
}
