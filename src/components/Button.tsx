import React, { SFC } from 'react'
import styled from 'styled-components'
import { BuffIcon } from 'components/BuffIcon'

interface IProps {
	disabled?: boolean
	onClick?: () => void
	id?: string
	buff?: string
}

export const Button: SFC<IProps> = ({ children, disabled, buff, onClick: handleClick, id }) => (
	<StyledButton
		disabled={disabled}
		onClick={handleClick}
		id={id}
	>
		{buff && <StyledBuffIconWrap><BuffIcon type={buff} emblem={true} /></StyledBuffIconWrap>}
		{children}
	</StyledButton>
)

const StyledButton = styled.button`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	border: 2px solid transparent;
	transition: border-color .1s ease-out, background-color .1s ease-out;
	cursor: pointer;
	white-space: normal;
	z-index: 1;
	&::before {
		content: '';
		position: absolute;
		top: -3px;
		left: -3px;
		width: 100%;
		height: 100%;
		border: 3px solid rgba(0,0,0,0.5);
		border-radius: 4px;
		transform: scale(1.06);
		z-index: -1;
	}
	&:hover:not(:disabled) {
		border-color: currentColor;
	}
	&:focus {
		outline: none;
	}
	&:active {
		background-color: rgba(0,0,0,0.75);
	}
	&:disabled {
		opacity: 0.5;
	}
	.material__name {
		color: #fff;
		padding-bottom: .5rem;
	}
	& > svg {
		color: rgba(255,255,255,.7);
	}
	& img {
		width: 100%;
		height: auto;
	}
	& > svg,
	& img {
		@media screen and (max-width: 46rem) {
			width: 75%;
		}
	}
`

const StyledBuffIconWrap = styled.span`
	position: absolute;
	top: 5px;
	right: 0;
	opacity: .5;
	svg {
		width: 15px;
	}
`
