import React from 'react'
import { useRecipeValue } from '../components/Context'
import { secToMin } from '../utils/secToMin'
import { priceCalculator } from '../utils/priceCalculator'

export const OutputContainer = () => {
	const { data } = useRecipeValue()

	return (
		<>
			<div>Ingredients: {data.ingredients}</div>
			<div>Price: {priceCalculator(data.ingredients, data.price)}</div>
			<div>Hearts: {data.hearts}</div>
			<div>Duration: {secToMin(data.duration)}</div>
		</>
	)
}
