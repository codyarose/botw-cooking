import React from 'react'
import styled from 'styled-components'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { secToMin } from 'utils/secToMin'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff } = useRecipeValue()

	return (
		<StyledOutputContainer>
			<SelectedMaterials selected={ingredients} />
			<div>Price: {price}</div>
			<HeartsContainer amount={hearts || 0} />
			<div>Time: {time && secToMin(time)}</div>
			<div>Buff: {buff && buff.type}</div>
			<div>Potency: {buff && buff.potency}</div>
		</StyledOutputContainer>
	)
}

const StyledOutputContainer = styled.div`
	padding: 1.5rem 3rem;
`
