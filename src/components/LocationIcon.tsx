import React from 'react'
import styled from 'styled-components'

interface Props {
	content: string[]
}

export const LocationIcon: React.FC<Props> = ({ content }) => {
	return (
		<StyledLocationIcon>
			<img
				src={`images/location.png`}
				alt="Locations Icon"
				title={`Location${content.length > 1 && 's'}: ${content.join(', ')}`}
			/>
		</StyledLocationIcon>
	)
}

const StyledLocationIcon = styled.div`
	position: absolute;
	top: 5px;
	left: 5px;
	width: 10px;
	height: 15px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: .5;
	}
`
