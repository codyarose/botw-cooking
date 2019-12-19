import { extraTime } from '../extraTime'

describe('extraTime', () => {
	it('Calculates correct extra time from ingredients', () => {
		const mock = [
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
			{
				id: 'material12',
				name: "Courser Bee Honey",
				price: 10,
				hearts: 2,
				first: null,
				buff: {
					type: "stamina",
					potency: 2
				},
				locations: [
					"Hyrule Field",
					"Tabantha Frontier"
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
		]
		expect(extraTime(mock)).toEqual(40)
		expect(extraTime(mock)).not.toEqual(65)
	})
})
