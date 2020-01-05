import React from 'react'
import styled from 'styled-components'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { PriceContainer } from 'containers/PriceContainer'
import { BuffIcon } from 'components/BuffIcon'
import { Time } from 'components/Time'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff } = useRecipeValue()

	const showTime = ['stamina', 'enduras', 'temp-hearts', undefined].indexOf(buff && buff.type) < 1

	return (
		<StyledOutputContainer>
			{ingredients && <SelectedMaterials selected={ingredients} />}
			{ingredients && ingredients.length > 0 &&
				<StyledOutputTextContainer>
					<PriceContainer price={price || 0} />
					<HeartsContainer amount={hearts || 0} />
					<StyledBuffAndTime>
						{buff && <BuffIcon type={buff.type} potency={buff.potency} />}
						{showTime && <Time seconds={time || 0} />}
					</StyledBuffAndTime>
				</StyledOutputTextContainer>
			}
		</StyledOutputContainer>
	)
}

const StyledOutputContainer = styled.div`
	max-width: 64rem;
	margin: 0 auto;
	padding: 3rem 3rem 1.5rem;
	@media screen and (max-width: 37.5rem) {
		padding-top: 1.5rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`

const StyledOutputTextContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: rgba(0,0,0,0.5);
	border: 3px solid transparent;
	padding: 1rem .5rem;
	line-height: 2;
	z-index: 1;
	& > * {
		margin-right: 1rem;
	}
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

const StyledBuffAndTime = styled.div`
	display: flex;
	& > div:first-of-type {
		margin-right: 1rem;
	}
`
