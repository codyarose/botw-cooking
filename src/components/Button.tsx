import React, { SFC } from 'react'

export interface IProps {
	onClick: () => any
	price?: number
	hearts?: number
	duration?: number
	disabled?: boolean
}

export const Button: SFC<IProps> = ({ onClick: handleClick, children, price, hearts, duration, disabled }) => (
	<button disabled={disabled} data-price={price} data-hearts={hearts} data-duration={duration} onClick={handleClick}>{children}</button>
)
