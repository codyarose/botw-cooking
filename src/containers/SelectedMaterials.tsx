import React from 'react'
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
		<div>
			Ingredients: {listIngredients}
		</div>
	)
}
