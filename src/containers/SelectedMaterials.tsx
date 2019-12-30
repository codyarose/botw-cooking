import React from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Button } from 'components/Button'
import { IMaterial } from 'utils/interfaces'

export const SelectedMaterials = ({ selected }: any) => {
	const { removeIngredient } = useRecipeValue()

	const listIngredients = selected.map((ingredient: IMaterial, index: number) =>
		<Button
			key={ingredient.id + index++}
			onClick={() => removeIngredient && removeIngredient(index)}
		>
			<img src={require(`./images/${ingredient.id}.png`)} alt={ingredient.name} />
			{ingredient.name}
		</Button>
	)
	return (
		<StyledSelectedMaterials>
			{listIngredients}
		</StyledSelectedMaterials>
	)
}

const StyledSelectedMaterials = styled.div`
	--auto-grid-min-size: 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding-bottom: 1.5rem;
`
