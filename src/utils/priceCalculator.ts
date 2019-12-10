export const priceCalculator = (ingredients: object[]) => {
	const length = ingredients.length
	const multiplier =
		length === 1 ? 1.5
			: length === 2 ? 1.75
				: length === 3 ? 2.05
					: length === 4 ? 2.4
						: length === 5 ? 2.8
							: 0

	const totalBasePrice: any = () => {
		let result = 0
		ingredients.forEach((ingredient: any) => {
			const amount = (ingredient || {}).price
			result += amount
		})
		return result
	}

	return (
		length === 0 ? 0 : Math.ceil((totalBasePrice() * multiplier) / 10) * 10
	)
}
