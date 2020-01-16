import React, { useState, useEffect, ChangeEvent } from 'react'
import { useRecipeValue } from 'components/Context'
import { Radio } from 'components/Radio'

export const FiltersContainer: React.FC = () => {
	const { handleFilter } = useRecipeValue()

	const [term, setTerm] = useState("")
	const [category, setCategory] = useState("all")
	const categoryOptions = [
		'all',
		'general',
		'hearty',
		'sneaky',
		'hasty',
		'tough',
		'energizing',
		'chilly',
		'enduring',
		'mighty',
		'spicy',
		'electro',
		'fireproof',
		'monster'
	]

	const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)

	const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)

	useEffect(() => {
		handleFilter!(term, category)
	}, [term, category])

	return (
		<form>
			<input onChange={handleTermChange} type="text" />
			<div>
				{categoryOptions.map(option =>
					<Radio
						key={option}
						group="category"
						value={option}
						label={option.charAt(0).toUpperCase() + option.slice(1)}
						onChange={handleRadioChange}
						checked={category === option}
					/>
				)}
			</div>
		</form>
	)
}
