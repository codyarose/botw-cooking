import React from 'react'
import { shallow } from 'enzyme'
import { MaterialsContainer } from './MaterialsContainer'
import { Button } from '../components/Button'
import { materials } from '../materials'

describe('MaterialsContainer', () => {
	it(`Renders`, () => {
		const wrapper = shallow(<MaterialsContainer />)
		// + 1 for reset button
		const num = materials.food.length + 1
		expect(wrapper.find(Button)).toHaveLength(num)
	})
})
