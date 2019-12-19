import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { useRecipeValue } from '../components/Context'
import { materials } from '../materials'

const foods = materials.food

export const MaterialsContainer = () => {
	const { ingredients, updateState, resetState } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const listFood = foods.map(food =>
		<Button
			key={food.id}
			disabled={disabled}
			onClick={() => updateState!(food.id)}
		>
			{food.name}
		</Button>
	)

	return (
		<StyledMaterialsContainer>
			<Button onClick={() => resetState && resetState()}>reset</Button>
			{listFood}
		</StyledMaterialsContainer>
	)
}

const StyledMaterialsContainer = styled.div`
	--auto-grid-min-size: 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: .5rem;
`
