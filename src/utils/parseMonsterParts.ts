// Returns the amount of extra time the monster part gives based on
// the tier of the part
export const parseMonsterParts = (tier: number) => {
	switch (tier) {
		case 1:
			return 40
		case 2:
			return 80
		case 3:
			return 160
	}
}
