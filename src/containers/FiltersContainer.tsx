import React, { ChangeEvent } from 'react'
import { useRecipeValue } from 'components/Context'

interface Props {

}

export const FiltersContainer: React.FC<Props> = () => {
	const { filter, handleFilter } = useRecipeValue()

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		handleFilter!(e.target.value)
	}

	return (
		<form>
			<input onChange={updateFilter} type="text" />
			{filter}
		</form>
	)
}
