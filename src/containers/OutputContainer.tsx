import React from 'react'
import styled from 'styled-components'
import { SelectedMaterials } from 'containers/SelectedMaterials'
import { HeartsContainer } from 'containers/HeartsContainer'
import { useRecipeValue } from 'components/Context'
import { PriceContainer } from 'containers/PriceContainer'
import { BuffIcon } from 'components/BuffIcon'
import { Time } from 'components/Time'
import { StyledButton } from 'components/Button'
import { Transition } from 'react-transition-group'

interface ITransitionState {
	state?: any
}

export const OutputContainer = () => {
	const { ingredients, time, hearts, price, buff, isSticky } = useRecipeValue()

	const showTime = ['stamina', 'enduras', 'temp-hearts', undefined].indexOf(buff && buff.type) < 1

	return (
		<Transition in={isSticky} timeout={200}>
			{(state) => (
				<StyledOutputContainer state={state}>
					{ingredients && <SelectedMaterials selected={ingredients} />}
					{ingredients && ingredients.length > 0 &&
						<StyledOutputTextContainer state={state}>
							<PriceContainer price={price || 0} />
							<HeartsContainer amount={hearts || 0} />
							{showTime && <StyledBuffAndTime>
								{buff && <BuffIcon type={buff.type} potency={buff.potency} />}
								{showTime && <Time seconds={time || 0} />}
							</StyledBuffAndTime>}
						</StyledOutputTextContainer>
					}
				</StyledOutputContainer>
			)}
		</Transition>
	)
}

const StyledOutputContainer = styled.div<ITransitionState>`
	position: relative;
	max-width: 64rem;
	margin: 0 auto;
	padding: 3rem 3rem 1.5rem;
	transition: transform .2s ease-in-out;
	transform: translateY(${({ state }) => state === "entering" || state === "entered" ? "-2rem" : "0"});
	${({ state }) => (state === "entering" || state === "entered") && "padding-bottom: 0;"}
	@media screen and (max-width: 50rem) {
		padding-top: 2rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		transform: translateY(${({ state }) => state === "entering" || state === "entered" ? "-1rem" : "0"});
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
		background-color: ${({ state }) => state === "entering" || state === "entered" ? "rgba(0,0,0,0.75)" : "transparent"};
		z-index: -1;
	}
	${StyledButton} {
		transition: background-color .2s ease-in-out;
		${({ state }) => (state === "entering" || state === "entered") && "background-color: transparent;"}
		&::before {
			transition: border-color .2s ease-in-out;
			${({ state }) => (state === "entering" || state === "entered") && "border-color: transparent;"}
		}
	}
`

const StyledOutputTextContainer = styled.div<ITransitionState>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: rgba(0,0,0,0.5);
	border: 3px solid transparent;
	padding: 1rem .5rem;
	line-height: 2;
	transition: transform .2s ease-in-out, background-color .2s ease-in-out;
	padding: ${({ state }) => state === "entering" || state === "entered" ? "0" : "1rem .5rem"};
	z-index: 1;
	${({ state }) => (state === "entering" || state === "entered") && `
		background-color: transparent;
		transform: translateY(-1.5rem);
		@media screen and (max-width: 25rem) {
			transform: translateY(-1rem) scale(0.8);
		}
	`}
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
		transition: border-color .2s ease-in-out;
		z-index: -1;
		${({ state }) => (state === "entering" || state === "entered") && `
			border-color: transparent;
		`}
	}
`

const StyledBuffAndTime = styled.div`
	display: flex;
	& > div:first-of-type {
		margin-right: 1rem;
	}
`
