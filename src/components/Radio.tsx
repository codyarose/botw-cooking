import React from 'react'
import styled from 'styled-components'

interface Props {
	group: string
	value: string
	label: string
	onChange: (e: any) => void
	checked: boolean
	tabIndex?: number
}

export const Radio: React.FC<Props> = ({ group, value, label, onChange, checked, tabIndex }: Props) => {
	return (
		<StyledRadio>
			<input
				type="radio"
				name={group}
				id={value}
				value={value}
				onChange={onChange}
				checked={checked}
				tabIndex={tabIndex}
			/>
			<label htmlFor={value}>{label}</label>
		</StyledRadio>
	)
}

const StyledRadio = styled.div`
	margin: 0 .1rem;
	input[type="radio"] {
		&:checked,
		&:not(:checked) {
			position: absolute;
			left: -9999px;
		}
		&:checked + label,
		&:not(:checked) + label {
			position: relative;
			cursor: pointer;
			display: inline-block;
			padding: 6px;
			border-radius: 4px;
			border: 2px solid transparent;
			overflow: hidden;
		}
		&:not(:checked) + label:hover {
			background-color: rgba(0,0,0,0.25);
		}
		&:checked + label:before,
		&:not(:checked) + label:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			transition: opacity 0.2s ease-out;
			z-index: -1;
		}
		&:not(:checked) + label:before {
			opacity: 0;
		}
		&:checked + label:before {
			opacity: 1;
		}
		&:checked:focus + label,
		&:not(:checked):focus + label {
			border-color: #fff;
		}
	}
`
