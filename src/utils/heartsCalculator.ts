import { findFirsts } from './findFirsts'

// Calculate total hearts from currently selected ingredients
export const heartsCalculator = (ingredients: object[]) => {
	// Gets the length of unique ingredients array with
	// `first: {hearts: #}`then multiplies by .25 to get the value that
	//  needs to be added from those ingredients
	const firsts = findFirsts(ingredients, 'hearts').length * .25

	let totalHearts = 0
	ingredients.forEach((ingredient: any) => {
		const heartsFromIngredient = (ingredient || {}).hearts
		totalHearts += heartsFromIngredient
	})
	return (totalHearts + firsts) * 2

}
