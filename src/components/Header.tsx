import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return (
		<StyledHeader>
			Breath of the Wild: Cooking
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	background-color: rgba(0,0,0,0.5);
	padding: 3rem;
	text-align: center;
	font-size: 2rem;
	font-style: italic;
	font-weight: 500;
	letter-spacing: 0.02em;
	border-bottom: 2px solid rgba(255,255,255,.25);
	color: rgba(255,255,255,0.8);
`
