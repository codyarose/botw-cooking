import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './Button'

describe('Button', () => {
	it(`Renders button element with children as text`, () => {
		const button = shallow(<Button>Submit</Button>)
		expect(button.text()).toEqual('Submit')

	})
	it(`Handles click event`, () => {
		window.alert = jest.fn()
		const button = shallow(<Button onClick={() => alert('clicked')}>button</Button>)
		button.simulate('click')
		expect(window.alert).toHaveBeenCalledWith('clicked')
	})
})
