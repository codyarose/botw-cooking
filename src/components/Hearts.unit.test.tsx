import React from 'react'
import 'jest-styled-components'
import { mount, shallow } from 'enzyme'
import { Heart, StyledHeart } from './Heart'

describe('Heart', () => {
	it(`Renders element with corrent size attribute`, () => {
		const wrapper = shallow(<Heart size={7} />)
		expect(wrapper.find(StyledHeart).props().size).toEqual(7)
	})

	it(`Has correct clip-path property`, () => {
		const whole = mount(<Heart size={1} />)
		const quarter = mount(<Heart size={0.25} />)
		const half = mount(<Heart size={0.5} />)
		expect(whole.find(StyledHeart)).toHaveStyleRule('clip-path', 'none')
		expect(quarter.find(StyledHeart)).toHaveStyleRule('clip-path', 'inset(-1px 50% 50% -1px)')
		expect(half.find(StyledHeart)).toHaveStyleRule('clip-path', 'inset(-1px 50% -1px -1px)')
	})
})
