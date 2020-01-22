import React from 'react'
import styled from 'styled-components'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { PriceContainer } from 'containers/PriceContainer'
import { BuffIcon } from 'components/BuffIcon'
import { Time } from 'components/Time'
import { StyledSticky } from 'components/StickyComponent'
import { ISticky } from 'utils/interfaces'
import { StyledButton } from 'components/Button'

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff, isSticky } = useRecipeValue()

	const showTime = ['stamina', 'enduras', 'temp-hearts', undefined].indexOf(buff && buff.type) < 1

	return (
		<StyledOutputContainer isSticky={isSticky}>
			{/* <StyledOutputContainerBackground /> */}
			{ingredients && <SelectedMaterials selected={ingredients} />}
			{ingredients && ingredients.length > 0 &&
				<StyledOutputTextContainer>
					<PriceContainer price={price || 0} />
					<HeartsContainer amount={hearts || 0} />
					{showTime && <StyledBuffAndTime>
						{buff && <BuffIcon type={buff.type} potency={buff.potency} />}
						{showTime && <Time seconds={time || 0} />}
					</StyledBuffAndTime>}
				</StyledOutputTextContainer>
			}
		</StyledOutputContainer>
	)
}

// const StyledOutputContainerBackground = styled.div

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
	@media screen and (max-width: 46rem) {
		padding: .5rem;
		line-height: 1.5;
	}
	& > * {
		margin-right: 0.5rem;
		margin-left: 0.5rem;
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

const StyledOutputContainer = styled.div<ISticky>`
	position: relative;
	max-width: 64rem;
	margin: 0 auto;
	padding: 3rem 3rem 1.5rem;
	@media screen and (max-width: 50rem) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	@media screen and (max-width: 37.5rem) {
		padding-top: 1.5rem;
	}
	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		height: 100%;
		background-color: transparent;
		transition: background-color .2s ease-in-out;
		z-index: -1;
	}
	${StyledSticky} & {
		transition: padding .2s ease-in-out;
		${({ isSticky }) => isSticky && `
			padding-top: 1rem;
			padding-bottom: 1rem;
			&::before {
				background-color: rgba(0,0,0,0.75);
			}
		`}
	}
	${StyledOutputTextContainer} {
		transition: transform .2s ease-in-out;
		${({ isSticky }) => isSticky && `
			padding: 0;
			@media screen and (max-width: 25rem) {
				font-size: .75em;
			}
		`}
	}
	${StyledOutputTextContainer},
	${StyledButton} {
		transition: background-color .2s ease-in-out;
		${({ isSticky }) => isSticky && 'background-color: rgba(0,0,0,0);'}
		&::before {
			transition: border-color .2s ease-in-out;
			${({ isSticky }) => isSticky && 'border-color: rgba(0,0,0,0);'}
		}
	}
`

const StyledBuffAndTime = styled.div`
	display: flex;
	& > div:first-of-type {
		margin-right: 1rem;
	}
`
