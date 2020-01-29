import React from 'react'
import { render } from '@testing-library/react'
import { BuffIcon, IProps } from '../BuffIcon'
import { ReactComponent as HastyIcon } from '../../icons/hasty.svg'

function renderBuffIcon(props: Partial<IProps> = {}) {
	const defaultProps: IProps = {
		type: 'speed',
		potency: 6,
	}
	return render(<BuffIcon {...defaultProps} {...props} />)
}

describe('<BuffIcon />', () => {
	test('should render', async () => {
		const { getByTestId } = renderBuffIcon()
		expect(getByTestId("BuffIcon")).toBeInTheDocument()
	})
	test('should render correct icon(s) based on potency', async () => {
		const { getAllByTestId } = renderBuffIcon()
		expect(getAllByTestId("hasty")).toHaveLength(2)
	})
	test('should render only one svg if emblem = true', () => {
		const { getAllByTestId } = renderBuffIcon({
			emblem: true,
		})
		expect(getAllByTestId("hasty")).not.toHaveLength(2)
		expect(getAllByTestId("hasty")).toHaveLength(1)
	})

})
