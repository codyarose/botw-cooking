import React from 'react'
import styled from 'styled-components'
import { filterMaterials } from 'utils/filterMaterials'
import { useRecipeValue } from 'components/Context'
import { ListMaterials } from 'components/ListMaterials'

interface IMaterialsContainer {
	readonly disabled?: boolean
}

export const MaterialsContainer = () => {
	const { ingredients, filters } = useRecipeValue()

	const disabled = ingredients && ingredients.length === 5 && true

	const filteredMaterials = filters && filterMaterials(filters.term, 'name', filters.category)

	return (
		<StyledMaterialsContainer disabled={disabled} aria-label="List of all ingredients">
			{filteredMaterials && !filteredMaterials.length
				? <StyledNone>Nothing found...</StyledNone>
				: <ListMaterials
					array={filteredMaterials!}
					onClickType={"update"}
					buttonDisabled={disabled}
				/>
			}
		</StyledMaterialsContainer>
	)
}

const StyledMaterialsContainer = styled.div<IMaterialsContainer>`
	max-width: 64rem;
	margin: 0 auto;
	padding: 1.5rem 3rem;
	@media screen and (max-width: 50rem) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`

const StyledNone = styled.div`
	width: 100%;
	grid-column: 1 / -1;
	font-size: 2rem;
	text-align: center;
	color: rgba(255,255,255,.75);
	margin-top: 2rem;
`
