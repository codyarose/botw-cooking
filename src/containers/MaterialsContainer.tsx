import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { Button } from 'components/Button'
import { useRecipeValue } from 'components/Context'
import { materials } from 'materials'

export const MaterialsContainer = () => {
	const { ingredients, updateIngredients } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const listFood = materials.map(item =>
		<LazyLoad
			key={item.id}
			once={true}
			height={140}
			offset={140}
		>
			<Button
				key={item.id}
				disabled={disabled}
				onClick={() => updateIngredients!(item.id)}
			>
				<picture>
					<source type="image/webp" srcSet={`images/${item.id}.webp`} />
					<source type="image/png" srcSet={`images/${item.id}.png`} />
					<img src={`images/${item.id}.png`} alt={item.name} />
				</picture>
				<span className="material__name">{item.name}</span>
			</Button>
		</LazyLoad>
	)

	return (
		<StyledMaterialsContainer>
			{listFood}
		</StyledMaterialsContainer>
	)
}

const StyledMaterialsContainer = styled.div`
	max-width: 64rem;
	margin: 0 auto;
	--auto-grid-min-size: 7rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding: 1.5rem 3rem;
	@media screen and (max-width: 64rem) {
		--auto-grid-min-size: 6rem;
	}
	@media screen and (max-width: 46rem) {
		grid-gap: 1.5rem;
	}
	@media screen and (max-width: 37.5rem) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
	@media screen and (max-width: 28rem) {
		--auto-grid-min-size: 4rem;
	}
`
