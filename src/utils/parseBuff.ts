import { IMaterial } from './interfaces'

export const parseBuff = (array: IMaterial[]) => {
	// Array of buff values for current ingredients
	const buffs = array.map((item: IMaterial) => (item || {}).buff)
	// Removes any that have 'none' buff type
	const nonesRemoved = buffs.filter(({ type }) => type !== 'none')
	// Array of the buff types as strings, duplicates removed
	const buffTypes = Array.from(new Set(nonesRemoved.map(({ type }) => type)))
	// If multiple buff types are added they'll cancel each other
	// in-game and no buff will be added
	if (buffTypes.length > 1) return [{ type: 'none', potency: 0 }]
	// Sum of buff potencies
	const potency = nonesRemoved.length && nonesRemoved.reduce((acc, item: any) => acc + item.potency, 0)
	return {
		type: buffTypes[0],
		potency: potency
	}
}
