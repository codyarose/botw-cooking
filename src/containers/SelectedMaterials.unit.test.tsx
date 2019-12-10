import React from 'react'
import { mount, shallow } from 'enzyme'
import { SelectedMaterials } from './SelectedMaterials'
import { Button } from '../components/Button'

describe('SelectedMaterials', () => {
	it(`renders`, () => {
		const mock = [
			{
				id: 'Material1',
				name: "Acorn",
				price: 2,
				hearts: 0.25,
				first: {
					duration: 20,
					hearts: 1
				},
				buff: {
					type: null,
					potency: null
				},
				locations: [
					"Base of trees"
				]
			},
			{
				id: 'Material2',
				name: "Apple",
				price: 3,
				hearts: 0.5,
				first: null,
				buff: {
					type: null,
					potency: null
				},
				locations: [
					"Hyrule Field",
					"East Necluda"
				]
			},
			{
				id: 'Material3',
				name: "Armored Carp",
				price: 10,
				hearts: 1,
				first: null,
				buff: {
					type: "defense",
					potency: 2
				},
				locations: [
					"Lanayru Great Spring",
					"East Necluda"
				]
			},
			{
				id: 'Material4',
				name: "Armored Porgy",
				price: 10,
				hearts: 1,
				first: null,
				buff: {
					type: "defense",
					potency: 3
				},
				locations: [
					"Necluda Sea",
					"Lanayru Sea"
				]
			},
			{
				id: 'Material5',
				name: "Big Hearty Radish",
				price: 15,
				hearts: 4,
				first: null,
				buff: {
					type: "temp-hearts",
					potency: 5
				},
				locations: [
					"Akkala Highlands",
					"Lanayru Great Spring"
				]
			},
		]
		const wrapper = mount(<SelectedMaterials selected={mock} />)
		expect(wrapper.find(Button)).toHaveLength(mock.length)
		expect(wrapper.find(Button)).not.toHaveLength(2)
	})
})
