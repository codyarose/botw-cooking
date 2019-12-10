import { priceCalculator } from './priceCalculator'

describe('priceCalculator', () => {
	it('Calculates selling price', () => {
		const result = priceCalculator(1, 25)
		expect(result).toBe(40)
	})
	it('Calculates selling price', () => {
		const result = priceCalculator(2, 60)
		expect(result).toBe(110)
	})
	it('Calculates selling price', () => {
		const result = priceCalculator(3, 95)
		expect(result).toBe(200)
	})
	it('Calculates selling price', () => {
		const result = priceCalculator(4, 140)
		expect(result).toBe(340)
	})
	it('Calculates selling price', () => {
		const result = priceCalculator(5, 15)
		expect(result).toBe(50)
	})
})
