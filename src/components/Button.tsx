import React, { SFC } from 'react'

export interface IProps {
	onClick: () => any
}

export const Button: SFC<IProps> = ({ onClick: handleClick, children }) => (
	<button onClick={handleClick}>{children}</button>
)
