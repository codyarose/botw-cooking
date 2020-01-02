import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
	disabled?: boolean
	onClick?: () => any
	id?: any
}

export const Button: SFC<IProps> = ({ children, disabled, onClick: handleClick, id }) => (
	<StyledButton
		disabled={disabled}
		onClick={handleClick}
		id={id}
	>
		<StyledButtonContent>
			{children}
		</StyledButtonContent>
	</StyledButton>
)

const StyledButton = styled.button`
	position: relative;
	height: 0;
	padding-top: 100%;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	border: 2px solid transparent;
	transition: border-color .1s ease-out, background-color .1s ease-out;
	z-index: 0;
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
		border-color: #fff;
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
	img {
		width: 75%;
		padding-bottom: 0.5rem;
	}
`

const StyledButtonContent = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
