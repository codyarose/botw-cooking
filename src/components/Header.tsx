import React from 'react'
import styled from 'styled-components'
import { Tooltip, StyledTooltip } from 'components/Tooltip'

export const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContent>
				Breath of the Wild: Cooking
				<Tooltip
					content={`
						Add ingredients to see the stats of the resulting item if you were to cook them together in-game
					`}
					tabIndex={0}
				/>
			</StyledHeaderContent>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	position: relative;
	background-color: rgba(0,0,0,0.5);
	width: 100%;
	text-align: center;
	font-size: 2rem;
	font-style: italic;
	font-weight: 500;
	letter-spacing: 0.02em;
	border-bottom: 2px solid rgba(255,255,255,.25);
	color: rgba(255,255,255,0.8);
	${StyledTooltip} {
		position: absolute;
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
		@media screen and (max-width: 28rem) {
			right: 0.5rem;
		}
	}
`

const StyledHeaderContent = styled.div`
	padding: 3rem;
	max-width: 64rem;
	margin: 0 auto;
	@media screen and (max-width: 37.5rem) {
		padding: 1rem;
		font-size: 1.2rem;
	}
`
