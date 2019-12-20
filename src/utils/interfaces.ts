export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first: null | {
		[key: string]: IFirst
	}
	buff: {
		[key: string]: IBuff
	}
	locations: string[]
}

interface IBuff {
	type: string | null
	potency: number | null
}

interface IFirst {
	duration: number
	hearts: number
}
