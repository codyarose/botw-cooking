import React from 'react'
import { Button } from '../components/Button'
import { useRecipeValue } from '../components/Context'
import { materials } from '../materials'

const foods = materials.food

export const MaterialsContainer = () => {
	const { data, ingredients, updateState, resetState } = useRecipeValue()

	const disabled = ingredients!.length === 5 && true

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
			<Button onClick={() => resetState!()}>reset</Button>
			{listFood}
		</>
	)
}
