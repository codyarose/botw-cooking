import { parseBuffTime } from '../parseBuffTime'

describe('parseBuffTime', () => {
	it(`Returns the added time from the provided buff type`, () => {
		expect(parseBuffTime('stamina')).toEqual(0)
		expect(parseBuffTime('defense')).toEqual(20)
		expect(parseBuffTime('attack')).not.toEqual(30)
		expect(parseBuffTime('what')).toEqual(0)
		expect(parseBuffTime('shock resist')).toEqual(120)
		expect(parseBuffTime('stealth')).toEqual(90)
	})
})
