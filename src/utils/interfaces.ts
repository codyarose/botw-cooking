export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first: null | {
		[key: string]: IFirst
	}
	buff: {
		type: string
		potency: number
	}
	locations: string[]
}

interface IFirst {
	duration: number
	hearts: number
}
