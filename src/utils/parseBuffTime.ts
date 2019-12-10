// Returns the amount of extra time the ingredient gives based on it's
// buff type
export const parseBuffTime = (type: string) => {
	if (type === null) return 0
	switch (type) {
		case 'attack':
		case 'defense':
			return 20
		case 'cold resist':
		case 'heat resist':
		case 'shock resist':
		case 'fireproof':
			return 120
		case 'speed':
			return 30
		case 'stealth':
			return 90
		default:
			return 0
	}
}
