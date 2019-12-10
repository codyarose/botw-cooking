import React from 'react'
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
		<>
			<Button onClick={() => resetState && resetState()}>reset</Button>
			{listFood}
		</>
	)
}
