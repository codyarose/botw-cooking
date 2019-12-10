import React from 'react'
import { SelectedMaterials } from './SelectedMaterials'
import { HeartsContainer } from './HeartsContainer'
import { useRecipeValue } from '../components/Context'
import { secToMin } from '../utils/secToMin'
import { priceCalculator } from '../utils/priceCalculator'

export const OutputContainer = () => {
	const { data, ingredients, time, hearts } = useRecipeValue()

	const { price } = data

	return (
		<>
			<SelectedMaterials selected={ingredients} />
			{/* <div>Price: {priceCalculator(ingredients, price)}</div> */}
			<HeartsContainer amount={hearts! * 2} />
			{hearts! * 2}
			<div>Time: {secToMin(time!)}</div>
		</>
	)
}
