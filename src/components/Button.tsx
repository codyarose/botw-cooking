import React, { SFC } from 'react'

interface IProps {
	disabled?: boolean
	onClick?: () => any
	id?: any
}

export const Button: SFC<IProps> = ({ children, disabled, onClick: handleClick, id }) => (
	<button disabled={disabled} onClick={handleClick} id={id}>{children}</button>
)
