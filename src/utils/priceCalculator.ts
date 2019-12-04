export const priceCalculator = (ingredients: number, price: number) => {
	const multiplier =
		ingredients === 1 ? 1.5
			: ingredients === 2 ? 1.75
				: ingredients === 3 ? 2.05
					: ingredients === 4 ? 2.4
						: ingredients === 5 ? 2.8
							: null

	return (
		Math.ceil((price * multiplier!) / 10) * 10
	)
}
