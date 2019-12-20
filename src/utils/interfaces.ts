export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first: object | null
	buff: object
	locations: string[]
}
