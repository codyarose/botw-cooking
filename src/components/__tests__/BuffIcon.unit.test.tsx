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
	const { getByTestId } = renderBuffIcon()
	const elem = getByTestId("BuffIcon")

	test('should render', async () => {
		expect(elem).toBeInTheDocument()
	})
	test('should render correct icon(s)', async () => {
		const { getAllByTestId } = renderBuffIcon()
		expect(getAllByTestId("hasty")).toHaveLength(2)
	})
})
