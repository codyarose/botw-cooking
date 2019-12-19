import React from 'react'
import styled from 'styled-components'

interface IHeartContainer {
	readonly abbr: number
}

interface IHeart {
	readonly size: number
}

export const Heart = ({ size, abbr }: any) => {
	return (
		<StyledHeartContainer abbr={abbr}>
			<StyledHeart size={size} />
		</StyledHeartContainer>
	)
}

const StyledHeartContainer = styled.div<IHeartContainer>`
	position: relative;
	width: 20px;
	margin: 0 2px;
	&::before {
		content: '${props => props.abbr && props.abbr}';
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		font-family: Arial;
		line-height: 0.5;
		font-size: 1rem;
		/* color: #fff; */
	}
`

export const StyledHeart = styled.div<IHeart>`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 90%;
	clip-path: ${props => props.size === 1 ? 'none'
		: props.size === 0.25 ? 'inset(-1px 50% 50% -1px)'
			: props.size === 0.5 ? 'inset(-1px 50% -1px -1px)'
				: 'none'};
	&::before,
	&::after {
		position: absolute;
		content: '';
		left: 50%;
		top: 0;
		width: 50%;
		height: 100%;
		background: #F53D3F;
		border-radius: 10px 10px 0 0;
		transform: rotate(-45deg);
		transform-origin: 0 100%;
	}
	&::after {
		left: 0;
		transform: rotate(45deg);
		transform-origin: 100% 100%;
	}
`
