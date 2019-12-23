interface IFirst {
	duration: number
	hearts: number
}

export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first: null | IFirst
	buff: {
		type: string
		potency: number
	}
	locations: string[]
}
