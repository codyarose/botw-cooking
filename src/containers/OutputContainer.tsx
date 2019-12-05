import React from 'react'
import { SelectedMaterials } from './SelectedMaterials'
import { useRecipeValue } from '../components/Context'
import { secToMin } from '../utils/secToMin'
import { priceCalculator } from '../utils/priceCalculator'

export const OutputContainer = () => {
	const { data, time } = useRecipeValue()

	const { price, hearts } = data
	return (
		<>
			<SelectedMaterials />
			{/* <div>Price: {priceCalculator(ingredients, price)}</div> */}
			<div>Hearts: {hearts}</div>
			<div>Time: {secToMin(time!)}</div>
		</>
	)
}
