export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first: null | {
		duration: number
		hearts: number
	}
	buff: {
		type: string
		potency: number
	}
	locations: string[]
}
