import React from 'react'
import styled from 'styled-components'
import { FadeIn } from 'components/FadeIn'
import { Button } from 'components/Button'
import { LocationIcon } from 'components/LocationIcon'
import { filterMaterials } from 'utils/filterMaterials'
import { useRecipeValue } from 'components/Context'

interface IMaterialsContainer {
	readonly disabled?: boolean
}

export const MaterialsContainer = () => {
	const { ingredients, updateIngredients, filters } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const filteredMaterials = filters && filterMaterials(filters.term, 'name', filters.category)

	const listFood = filteredMaterials && filteredMaterials.map(item => {
		const imageName = item.name.replace(/\s/g, "-")
		return (
			<Button
				key={item.id}
				disabled={disabled}
				onClick={() => updateIngredients!(item.id)}
				buff={item.buff.type}
			>
				<LocationIcon content={item.locations} />
				<FadeIn height={95} duration={200} easing={'ease-in-out'}>
					{onLoad => (
						<picture onLoad={onLoad}>
							<source type="image/webp" srcSet={`images/${imageName}.webp`} />
							<source type="image/png" srcSet={`images/${imageName}.png`} />
							<img src={`images/${imageName}.png`} alt={item.name} />
						</picture>
					)}
				</FadeIn>
				<span className="material__name">{item.name}</span>
			</Button >
		)
	})

	return (
		<StyledMaterialsContainer disabled={disabled}>
			{!filteredMaterials!.length ? <StyledNone>Nothing found...</StyledNone> : listFood}
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

const StyledNone = styled.div`
	width: 100%;
	grid-column: 1 / -1;
	font-size: 2rem;
	text-align: center;
	color: rgba(255,255,255,.75);
	margin-top: 2rem;
`
