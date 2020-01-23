import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

interface Props {
	content: string
	tabIndex?: number
}

interface ITransitionState {
	state?: any
}

export const Tooltip: FC<Props> = ({ content, tabIndex }) => {
	const [displayTooltip, setDisplayTooltip] = useState(false)

	return (
		<Transition in={displayTooltip} timeout={100}>
			{(state) => (
				<StyledTooltip>
					<StyledFocusCatcher
						id="focusCatcher"
						tabIndex={tabIndex}
						onFocus={() => setDisplayTooltip(true)}
						onBlur={() => setDisplayTooltip(false)}
					/>
					<StyledTooltipIcon
						htmlFor="focusCatcher"
						onMouseOver={() => setDisplayTooltip(true)}
						onMouseLeave={() => setDisplayTooltip(false)}
					>
						?
				</StyledTooltipIcon>
					<StyledTooltipContent state={state}>
						{content}
					</StyledTooltipContent>
				</StyledTooltip>
			)}
		</Transition>
	)
}

export const StyledTooltip = styled.div`
	position: relative;
	display: inline-block;
	z-index: 3;
`

const StyledTooltipIcon = styled.label`
	background-color: #000;
	width: 20px;
	height: 20px;
	padding: 5px;
	border-radius: 50%;
	font-size: 1rem;
	font-style: normal;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: help;
	opacity: .5;
	transition: opacity .1s ease-out;
	@media screen and (max-width: 28rem) {
		width: 10px;
		height: 10px;
		font-size: 0.8rem;
	}
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid transparent;
		transition: border-color .1s ease-out;
	}
	&:hover {
		opacity: 1;
		&::before {
			border-color: rgba(255,255,255,.5);
		}
	}
`

const StyledFocusCatcher = styled.input.attrs({ type: 'radio' })`
	position: absolute;
	opacity: 0;
	pointer-events: none;
	&:focus + ${StyledTooltipIcon} {
		opacity: 1;
		&::before {
			border-color: rgba(255,255,255,.5);
		}
	}
`

const StyledTooltipContent = styled.div<ITransitionState>`
	position: absolute;
	top: 0;
	right: 150%;
	width: 100%;
	min-width: 150px;
	max-width: 250px;
	height: auto;
	font-size: 0.8rem;
	font-style: normal;
	background-color: rgba(0,0,0,0.75);
	border-radius: 3px;
	padding: .5rem;
	transition: opacity .1s ease-out, transform .1s ease-out;
	opacity: ${({ state }) => (state === "entering" || state === "entered") ? "1" : "0"};
	transform: ${({ state }) => (state === "entering" || state === "entered") ? "scale(1) translateX(0)" : "scale(0.9) translateX(1rem)"};
	&::before {
		position: absolute;
		content: '';
		top: 0.5rem;
		left: 100%;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 7px 0 7px 7px;
		border-color: transparent transparent transparent rgba(0,0,0,0.75);
		@media screen and (max-width: 28rem) {
			top: 0.3rem;
		}
	}
`
