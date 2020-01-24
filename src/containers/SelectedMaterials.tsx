import React from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { IMaterial } from 'utils/interfaces'
import { Transition } from 'react-transition-group'
import { ListMaterials } from 'components/ListMaterials'

interface ISelectedMaterials {
	selected: IMaterial[]
}

interface ITransitionState {
	state?: any
}

export const SelectedMaterials = ({ selected }: ISelectedMaterials) => {
	const { isSticky } = useRecipeValue()

	return (
		<Transition in={isSticky} timeout={200}>
			{(state) => (
				selected.length < 1
					? <StyledDefaultText>
						Add an ingredient to start
					</StyledDefaultText>
					: <StyledSelectedMaterials state={state}>
						<ListMaterials
							array={selected}
							onClickType={"remove"}
						/>
					</StyledSelectedMaterials>
			)}
		</Transition>
	)
}

export const StyledSelectedMaterials = styled.div<ITransitionState>`
	position: relative;
	padding-bottom: ${({ state }) => state === "entering" || state === "entered" ? "2.5rem" : "3rem"};
	@media screen and (max-width: 37.5rem) {
		padding-bottom: 1.5rem;
	}
`

const StyledDefaultText = styled.div`
	text-align: center;
	font-style: italic;
	letter-spacing: 0.02em;
	color: rgba(255,255,255,.5);
	padding-bottom: 1rem;
	transition: top .2s ease-in-out;
`
