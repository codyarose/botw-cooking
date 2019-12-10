import React from 'react'
import { shallow } from 'enzyme'
import { OutputContainer } from './OutputContainer'
import { SelectedMaterials } from './SelectedMaterials'
import { HeartsContainer } from './HeartsContainer'

describe('OutputContainer', () => {
	it(`Renders container with correct children`, () => {
		const wrapper = shallow(<OutputContainer />)
		expect(wrapper.find(SelectedMaterials)).toBeTruthy()
		expect(wrapper.find(HeartsContainer)).not.toBeFalsy()
	})
})
