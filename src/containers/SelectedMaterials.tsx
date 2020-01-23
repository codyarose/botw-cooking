import React from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Button } from 'components/Button'
import { IMaterial } from 'utils/interfaces'
import { LocationIcon } from 'components/LocationIcon'
import Media from 'react-media'
import { Transition } from 'react-transition-group'

interface ISelectedMaterials {
	selected: IMaterial[]
}

interface ITransitionState {
	state?: any
}

export const SelectedMaterials = ({ selected }: ISelectedMaterials) => {
	const { removeIngredient, isSticky } = useRecipeValue()

	const listIngredients = selected.map((item: IMaterial, index: number) => {
		const imageName = item.name.replace(/\s/g, "-").toLowerCase()
		return (
			<Button
				key={item.name + index++}
				onClick={() => removeIngredient && removeIngredient(index)}
				buff={item.buff && item.buff.type}
				tabIndex={0}
			>
				<Media query="(min-width: 735px)" render={() => (
					<LocationIcon content={item.locations} />
				)} />
				<picture>
					<source type="image/webp" srcSet={`images/${imageName}.webp`} />
					<source type="image/png" srcSet={`images/${imageName}.png`} />
					<img src={`images/${imageName}.png`} alt={item.name} />
				</picture>
				<span className="material__name">{item.name}</span>
			</Button>
		)
	})

	return (
		<Transition in={isSticky} timeout={200}>
			{(state) => (
				selected.length < 1
					? <StyledDefaultText state={state}>
						Add an ingredient to start
					</StyledDefaultText>
					: <StyledSelectedMaterials state={state}>
						{listIngredients}
					</StyledSelectedMaterials>
			)}
		</Transition>
	)
}

export const StyledSelectedMaterials = styled.div<ITransitionState>`
	position: relative;
	--auto-grid-min-size: 15%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding-bottom: ${({ state }) => state === "entering" || state === "entered" ? "2.5rem" : "3rem"};
	${({ state }) => state === ("entering" || state === "entered") && "row-gap: 0.5rem;"}
	@media screen and (max-width: 46rem) {
		gap: 1rem;
	}
	@media screen and (max-width: 37.5rem) {
		padding-bottom: 1.5rem;
	}
	@media screen and (max-width: 32rem) {
		--auto-grid-min-size: 4rem;
	}
`

const StyledDefaultText = styled.div<ITransitionState>`
	text-align: center;
	font-style: italic;
	letter-spacing: 0.02em;
	color: rgba(255,255,255,.5);
	padding-bottom: 1rem;
	transition: top .2s ease-in-out;
`
