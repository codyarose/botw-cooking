import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react'
import { materials } from '../materials'
import { extraTime } from '../utils/extraTime'
import { priceCalculator } from '../utils/priceCalculator'
import { heartsCalculator } from '../utils/heartsCalculator'
import { parseBuff } from '../utils/parseBuff'

interface IContext {
	data: any
	ingredients: Array<object>
	time: number
	hearts: number
	price: number
	buff: string
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
	time: number
}

const findById = (obj: any, id: string) => {
	for (const key in obj) {
		if (!obj.hasOwnProperty(key)) continue
		return obj[key].find((item: any) => item.id === id)
	}
}

export const RecipeContext = createContext<Partial<IContext>>({})

export const RecipeProvider = ({ children }: IProvider) => {
	const initialState = {
		ingredients: [],
		price: 0,
		time: 0
	}

	const [state, setState] = useState<IState>(initialState)
	const [ingredients, setIngredients]: any = useState([])
	const [time, setTime] = useState(0)
	const [hearts, setHearts] = useState(0)
	const [price, setPrice] = useState(0)
	const [buff, setBuff] = useState('')

	useEffect(() => {
		setTime(extraTime(ingredients) + (ingredients.length * 30))
		setPrice(priceCalculator(ingredients))
		setHearts(heartsCalculator(ingredients))
		console.log(parseBuff(ingredients))
	}, [ingredients])

	return (
		<RecipeContext.Provider
			value={{
				data: state,
				ingredients,
				time,
				hearts,
				price,
				buff,
				updateState: (id) => {
					const itemData = findById(materials, id)

					setIngredients((prevIngredients: Array<object>) => [...prevIngredients, itemData])
				},
				resetState: () => {
					setState(initialState)
					setIngredients([])
					setTime(0)
					setHearts(0)
					setBuff('')
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
