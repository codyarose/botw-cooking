import React from 'react'
import { shallow } from 'enzyme'
import { secToMin } from './secToMin'

describe('secToMin', () => {
	it('Converts seconds to minutes', () => {
		const result = secToMin(600)
		expect(result).toBe('10:00')
	})
	it('Converts seconds to minutes', () => {
		const result = secToMin(599)
		expect(result).toBe('9:59')
	})
})
