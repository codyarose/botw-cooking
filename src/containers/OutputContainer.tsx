import React from 'react'
import styled from 'styled-components'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { secToMin } from 'utils/secToMin'
import { PriceContainer } from 'containers/PriceContainer'
import { BuffIcon } from 'components/BuffIcon'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff } = useRecipeValue()

	return (
		<StyledOutputContainer>
			{<SelectedMaterials selected={ingredients} />}
			<StyledOutputTextContainer>
				<PriceContainer price={price || 0} />
				<HeartsContainer amount={hearts || 0} />
				<div>Time: {time && secToMin(time)}</div>
				<div>Buff: {buff && buff.type}</div>
				<div>Potency: {buff && buff.potency}</div>
				{/* {buff && buff.type === 'stamina' || buff && buff.type === 'enduras' &&
					<StaminaGauge progress={70} type={'enduras'} />
				} */}
				<BuffIcon />
			</StyledOutputTextContainer>
		</StyledOutputContainer>
	)
}

const StyledOutputContainer = styled.div`
	max-width: 64rem;
	margin: 0 auto;
	padding: 3rem 3rem 1.5rem;
	@media screen and (max-width: 37.5rem) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`

const StyledOutputTextContainer = styled.div`
	position: relative;
	background-color: rgba(0,0,0,0.5);
	border: 3px solid transparent;
	padding: .5rem;
	line-height: 1.5;
	z-index: 0;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% + 10px);
		height: calc(100% + 10px);
		border: 3px solid rgba(0,0,0,0.5);
		border-radius: 4px;
		z-index: -1;
	}
`
