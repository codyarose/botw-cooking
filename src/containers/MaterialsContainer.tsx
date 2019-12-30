import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/Button'
import { useRecipeValue } from 'components/Context'
import { materials } from 'materials'

export const MaterialsContainer = () => {
	const { ingredients, updateIngredients } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const listFood = materials.map(item =>
		<Button
			key={item.id}
			disabled={disabled}
			onClick={() => updateIngredients!(item.id)}
		>
			<img src={require(`./images/${item.id}.png`)} alt={item.name} />
			{item.name}
		</Button>
	)

	return (
		<StyledMaterialsContainer>
			{listFood}
		</StyledMaterialsContainer>
	)
}

const StyledMaterialsContainer = styled.div`
	--auto-grid-min-size: 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding: 1.5rem 3rem;
`
