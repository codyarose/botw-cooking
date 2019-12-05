import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react'
import { materials } from '../materials'

interface IContext {
	data: any
	ingredients: Array<object>
	time: number
	updateState: (id: string) => void
	resetState: () => void
	removeIngredient: (index: number) => void
}

interface IProvider {
	children: ReactNode
}

interface IState {
	ingredients: any
	price: number
	hearts: number
	duration: number
	time: number
}

const findById = (obj: any, id: string) => {
	for (const key in obj) {
		if (!obj.hasOwnProperty(key)) continue
		return obj[key].find((item: any) => item.id === id)
	}
}

const parseBuff = (obj: any) => {
	const type = obj.type
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
	}
}

export const RecipeContext = createContext<Partial<IContext>>({})

export const RecipeProvider = ({ children }: IProvider) => {
	const initialState = {
		ingredients: [],
		price: 0,
		hearts: 0,
		duration: 0,
		time: 0
	}

	const [state, setState] = useState<IState>(initialState)
	const [ingredients, setIngredients]: any = useState([])
	const [time, setTime] = useState(0)

	useEffect(() => {
		setTime(ingredients.length * 30)
	}, [ingredients])

	let { price, hearts, duration } = state

	return (
		<RecipeContext.Provider
			value={{
				data: state,
				ingredients,
				time,
				updateState: (id) => {
					const itemData = findById(materials, id)
					const buffTime = parseBuff(itemData.buff)
					setState({
						...state,
						price: price += itemData.price,
						hearts: hearts += itemData.hearts * 2,
						duration: duration += buffTime!,
						// time: duration + (ingredients.length * 30)
					})
					setIngredients((prevIngredients: Array<object>) => [...prevIngredients, itemData])
				},
				resetState: () => {
					setState(initialState)
					setIngredients([])
					setTime(0)
				},
				removeIngredient: (index) => {
					const newIngredients = ingredients.filter((_: any, i: number) => {
						return i !== index - 1
					})
					setIngredients(newIngredients)
				}
			}}
		>
			{children}
		</RecipeContext.Provider>
	)
}

export const useRecipeValue = () => useContext(RecipeContext)
