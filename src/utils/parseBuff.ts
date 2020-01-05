import { IMaterial } from 'utils/interfaces'

export const parseBuff = (array: IMaterial[]) => {
	// Array of buff values for current ingredients
	const buffs = array.map((item: IMaterial) => (item || {}).buff)
	// Removes any that have 'none' buff type
	const nonesRemoved = buffs.filter(buff => buff!.type !== 'none')
	// Array of the buff types as strings, duplicates removed
	const buffTypes = Array.from(new Set(nonesRemoved.map(buff => buff!.type)))
	// If multiple buff types are added they'll cancel each other
	// in-game and no buff will be added
	if (buffTypes.length > 1) return [{ type: 'none', potency: 0 }]
	// Sum of buff potencies
	return {
		type: buffTypes[0],
		potency: nonesRemoved.reduce<number>((acc, item) => acc + item!.potency, 0)
	}
}
