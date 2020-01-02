import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Button } from 'components/Button'
import { IMaterial } from 'utils/interfaces'

export const SelectedMaterials = ({ selected }: any) => {
	const { removeIngredient, resetState } = useRecipeValue()

	const listIngredients = selected.map((ingredient: IMaterial, index: number) =>
		<Button
			key={ingredient.id + index++}
			onClick={() => removeIngredient && removeIngredient(index)}
		>
			<img src={`${ingredient.id}.png`} alt={ingredient.name} />
			{ingredient.name}
		</Button>
	)
	return (
		<Fragment>
			{selected.length < 1 && <StyledDefaultText>Add an ingredient</StyledDefaultText>}
			<StyledSelectedMaterials>
				{selected.length > 0 && <Button onClick={resetState}>Reset</Button>}
				{listIngredients}
			</StyledSelectedMaterials>
		</Fragment>
	)
}

const StyledSelectedMaterials = styled.div`
	--auto-grid-min-size: 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding-bottom: 3rem;
	@media screen and (max-width: 64rem) {
		--auto-grid-min-size: 6rem;
	}
	@media screen and (max-width: 46rem) {
		grid-gap: 1.5rem;
	}
	@media screen and (max-width: 28rem) {
		--auto-grid-min-size: 4rem;
	}
`

const StyledDefaultText = styled.div`
	text-align: center;
	font-style: italic;
	letter-spacing: 0.02em;
	color: rgba(255,255,255,.5);
`
