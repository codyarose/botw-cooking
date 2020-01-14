interface IFirst {
	duration?: number
	hearts?: number
	[index: string]: any
}

export interface IBuff {
	type: string
	potency: number
}

export interface IMaterial {
	id: string
	name: string
	price: number
	hearts: number
	first?: null | IFirst
	buff?: {
		type?: string
		potency?: number
	}
	tier?: number
	locations: string[]
}
