import React from 'react'
import { useRecipeValue } from '../components/Context'
import { Button } from '../components/Button'

export const SelectedMaterials = () => {
	const { ingredients, removeIngredient } = useRecipeValue()

	const listIngredients = ingredients && ingredients.map((ingredient: any, index) =>
		<Button
			key={ingredient.id + index++}
			onClick={() => removeIngredient!(index)}
		>
			{ingredient.name}
		</Button>
	)
	return (
		<div>
			{listIngredients}
		</div>
	)
}
