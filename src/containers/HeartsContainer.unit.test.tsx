import React from 'react'
import { shallow } from 'enzyme'
import { HeartsContainer } from './HeartsContainer'
import { Heart } from '../components/Heart'

describe('HeartsContainer', () => {
	it(`Renders container with correct number of Heart components`, () => {
		const num = Math.ceil(4.5)
		const wrapper = shallow(<HeartsContainer amount={num} />)
		expect(wrapper.find(Heart)).toHaveLength(num)
	})
})
