import React from 'react'
import { SelectedMaterials } from './SelectedMaterials'
import { HeartsContainer } from './HeartsContainer'
import { useRecipeValue } from '../components/Context'
import { secToMin } from '../utils/secToMin'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price } = useRecipeValue()

	return (
		<>
			<SelectedMaterials selected={ingredients} />
			<div>Price: {price}</div>
			<HeartsContainer amount={hearts} />
			<div>Time: {time && secToMin(time)}</div>
		</>
	)
}
