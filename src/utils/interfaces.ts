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
	type: string
	potency: number
}

interface IFirst {
	duration: number
	hearts: number
}
