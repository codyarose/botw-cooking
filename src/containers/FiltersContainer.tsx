import React, { useState, useEffect, ChangeEvent } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Radio } from 'components/Radio'

const categoryOptions = [
	'all',
	'chilly',
	'electro',
	'enduring',
	'energizing',
	'fireproof',
	'general',
	'hasty',
	'hearty',
	'mighty',
	'monster',
	'sneaky',
	'spicy',
	'tough',
]

export const FiltersContainer: React.FC = () => {
	const { handleFilter } = useRecipeValue()

	const [term, setTerm] = useState("")
	const [category, setCategory] = useState("all")

	const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)

	const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)

	useEffect(() => {
		handleFilter!(term, category)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term, category])

	return (
		<StyledFiltersContainer onSubmit={(e: any) => e.preventDefault()} aria-label="Ingredient filters">
			<StyledSearchInput
				type="text"
				onChange={handleTermChange}
				placeholder="Search..."
				tabIndex={0}
				aria-label="Text search to filter ingredients by name"
			/>
			<StyledRadioContainer>
				{categoryOptions.map(option =>
					<Radio
						key={option}
						group="category"
						value={option}
						label={option.charAt(0).toUpperCase() + option.slice(1)}
						onChange={handleRadioChange}
						checked={category === option}
						tabIndex={0}
					/>
				)}
			</StyledRadioContainer>
		</StyledFiltersContainer>
	)
}

const StyledFiltersContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 64rem;
	padding: 1rem 3rem;
	margin: 0 auto;
`
const StyledSearchInput = styled.input`
	width: 100%;
	max-width: 50vw;
	border: none;
	border-bottom: 2px solid rgba(255,255,255,0.5);
	outline: none;
	box-shadow: none;
	background-color: transparent;
	padding: .5rem 2rem;
	font-size: 2rem;
	color: inherit;
	transition: border-color 0.2s ease-in-out;
	margin-bottom: 1rem;
	@media screen and (max-width:46em) {
		font-size: 1.5rem;
	}
	&:focus {
		border-color: #fff;
	}
	&::placeholder {
		color: rgba(255,255,255,0.5);
	}
`
const StyledRadioContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
