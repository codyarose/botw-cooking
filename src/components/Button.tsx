import React, { SFC } from 'react'

export interface IProps {
	disabled?: boolean
	onClick: () => any
	id?: string | number
}

export const Button: SFC<IProps> = ({ children, disabled, onClick: handleClick, id }) => (
	<button disabled={disabled} onClick={handleClick}>{children}</button>
)
