import React from 'react'

interface Props {
	group: string
	value: string
	label: string
	onChange: (e: any) => void
	checked: boolean
}

export const Radio: React.FC<Props> = ({ group, value, label, onChange, checked }: Props) => {
	return (
		<div>
			<input
				type="radio"
				name={group}
				id={value}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<label htmlFor={value}>{label}</label>
		</div>
	)
}
