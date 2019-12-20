import { findFirsts } from './findFirsts'
import { IMaterial } from './interfaces'

// Calculate total hearts from currently selected ingredients
export const heartsCalculator = (ingredients: Array<IMaterial>) => {
	// Gets the length of unique ingredients array with
	// `first: {hearts: #}`then multiplies by .25 to get the value that
	//  needs to be added from those ingredients
	const firsts = findFirsts(ingredients, 'hearts').length * .25

	const totalHearts = ingredients.reduce((acc, item) => acc + item.hearts, 0)
	return (totalHearts + firsts) * 2

}
