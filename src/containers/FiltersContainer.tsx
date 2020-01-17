import React, { useState, useEffect, ChangeEvent } from 'react'
import styled from 'styled-components'
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term, category])

	return (
		<StyledFiltersContainer onSubmit={(e: any) => e.preventDefault()}>
			<StyledSearchInput onChange={handleTermChange} type="text" placeholder="Search..." />
			<StyledRadioContainer>
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
			</StyledRadioContainer>
		</StyledFiltersContainer>
	)
}

const StyledFiltersContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const StyledSearchInput = styled.input`
	width: 50vw;
	min-width: 300px;
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
	&:focus {
		border-color: #fff;
	}
	&::placeholder {
		color: rgba(255,255,255,0.5);
	}
`
const StyledRadioContainer = styled.div`
	display: flex;
`
