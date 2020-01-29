import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button, IProps } from '../Button'

function renderButton(props: Partial<IProps> = {}) {
	const defaultProps: IProps = {
		onClick() {
			return
		},
		disabled: true,
	}
	return render(<Button {...defaultProps} {...props}>Button</Button>)
}

describe('<Button>', () => {
	const { getByText } = renderButton()
	const elem = getByText("Button")
	test('should render button element', async () => {
		expect(elem).toBeInTheDocument()
	})
	test('should capture click', async done => {
		renderButton({ onClick: done() })
		fireEvent.click(elem)
	})
	test('should render BuffIcon if given buff prop', async () => {
		const { getAllByTestId } = renderButton({
			buff: 'speed'
		})
		expect(getAllByTestId("hasty")).toHaveLength(1)
		expect(getAllByTestId("hasty")).not.toHaveLength(3)
	})

})
