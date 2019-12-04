import React from 'react'
import { Button } from '../components/Button'
import { useRecipeValue } from '../components/Context'

export const MaterialsContainer = () => {
	const { data, updateState, resetState } = useRecipeValue()

	const disabled = data.ingredients >= 5 ? true : false

	return (
		<>
			<Button disabled={disabled} price={3} hearts={0.5} duration={0} onClick={updateState}>apple</Button>
			<Button disabled={disabled} price={5} hearts={0.5} duration={20} onClick={updateState}>banana</Button>
			<Button onClick={resetState}>reset</Button>
		</>
	)
}
