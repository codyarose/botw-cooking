import { heartsCalculator } from './heartsCalculator'

describe('heartsCalculator', () => {
	it(`Calculates total hearts from ingredients`, () => {
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
			}
		]
		expect(heartsCalculator(mock)).toEqual(1.5)
		expect(heartsCalculator(mock)).not.toEqual(4)
	})
})
