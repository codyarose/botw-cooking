import { IMaterial } from 'utils/interfaces'

export const parseBuff = (array: IMaterial[]) => {
	// Array of buff values for current ingredients
	const buffs = array.map((item: IMaterial) => item.buff)

	// Removes any that have no buff
	const emptiesRemoved = buffs.filter(buff => buff && buff.type !== undefined)

	// Array of the buff types as strings, duplicates removed
	const buffTypes = Array.from(new Set(emptiesRemoved.map(buff => buff && buff.type)))

	// If multiple buff types are added they'll cancel each other
	// in-game and no buff will be added
	if (buffTypes.length > 1) return [{ type: 'none', potency: 0 }]

	return {
		type: buffTypes[0],
		potency: emptiesRemoved.reduce((acc, item) => acc + item!.potency!, 0)
	}
}
