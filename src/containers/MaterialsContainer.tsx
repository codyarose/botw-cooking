import React from 'react'
import styled, { css } from 'styled-components'
import { FadeIn } from 'components/FadeIn'
import Tooltip from 'react-simple-tooltip'
import { Button } from 'components/Button'
import { filterMaterials } from 'utils/filterMaterials'
import { useRecipeValue } from 'components/Context'

interface IMaterialsContainer {
	readonly disabled?: boolean
}

export const MaterialsContainer = () => {
	const { ingredients, updateIngredients, filter } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const filteredMaterials = filterMaterials(filter!.term || "", 'name', filter!.category || "")

	const listFood = filteredMaterials.map(item =>
		<Tooltip
			content={item.locations.join(', ')}
			placement="bottom"
			customCss={css`
				white-space: nowrap;
			`}
			background="rgba(0,0,0,0.75)"
			fadeDuration={500}
			fadeEasing="ease-in-out"
			fontSize="12px"
			padding={8}
			radius={4}
		>
			<Button
				disabled={disabled}
				onClick={() => updateIngredients!(item.id)}
				buff={item.buff.type}
			>
				<FadeIn height={95} duration={200} easing={'ease-in-out'} key={item.id}>
					{onLoad => (
						<picture onLoad={onLoad}>
							<source type="image/webp" srcSet={`images/${item.id}.webp`} />
							<source type="image/png" srcSet={`images/${item.id}.png`} />
							<img src={`images/${item.id}.png`} alt={item.name} />
						</picture>
					)}
				</FadeIn>
				<span className="material__name">{item.name}</span>
			</Button >
		</Tooltip >
	)

	return (
		<StyledMaterialsContainer disabled={disabled}>
			{listFood}
		</StyledMaterialsContainer>
	)
}

const StyledMaterialsContainer = styled.div<IMaterialsContainer>`
	max-width: 64rem;
	margin: 0 auto;
	--auto-grid-min-size: 7rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding: 1.5rem 3rem;
	${props => props.disabled && 'pointer-events: none'};
	@media screen and(max-width: 46rem) {
		--auto-grid-min-size: 6rem;
		grid-gap: 1.5rem;
	}
	@media screen and(max-width: 37.5rem) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	@media screen and(max-width: 28rem) {
		--auto-grid-min-size: 4rem;
	}
`
