// Calculate total hearts from currently selected ingredients
export const heartsCalculator = (ingredients: object[]) => {
	let totalHearts = 0
	ingredients.forEach((ingredient: any) => {
		const heartsFromIngredient = (ingredient || {}).hearts
		totalHearts += heartsFromIngredient
	})
	return totalHearts * 2
}
