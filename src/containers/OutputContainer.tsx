import React from 'react'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { secToMin } from 'utils/secToMin'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff } = useRecipeValue()

	return (
		<>
			<SelectedMaterials selected={ingredients} />
			<div>Price: {price}</div>
			<HeartsContainer amount={hearts || 0} />
			<div>Time: {time && secToMin(time)}</div>
			<div>Buff: {buff && buff.type}</div>
			<div>Potency: {buff && buff.potency}</div>
		</>
	)
}
