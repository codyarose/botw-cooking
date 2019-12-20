import { IMaterial } from './interfaces'

export const priceCalculator = (ingredients: IMaterial[]) => {
	const length = ingredients.length
	const multiplier =
		length === 1 ? 1.5
			: length === 2 ? 1.75
				: length === 3 ? 2.05
					: length === 4 ? 2.4
						: length === 5 ? 2.8
							: 0

	const totalBasePrice = ingredients.length && ingredients.reduce((acc, item) => acc + item.price, 0)

	return (
		length === 0 ? 0 : Math.ceil((totalBasePrice * multiplier) / 10) * 10
	)
}
