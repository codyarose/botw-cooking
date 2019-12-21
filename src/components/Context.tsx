import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react'
import { materials } from '../materials'
import { extraTime } from '../utils/extraTime'
import { priceCalculator } from '../utils/priceCalculator'
import { heartsCalculator } from '../utils/heartsCalculator'
import { parseBuff } from '../utils/parseBuff'
import { IMaterial } from '../utils/interfaces'

interface IContext {
	ingredients: IMaterial[]
	time: number
	hearts: number
	price: number
	buff: any
	updateIngredients: (id: string) => void
	resetState: () => void
	removeIngredient: (index: number) => void
}

interface IProvider {
	children: ReactNode
}

const findById = (obj: any, id: string) => {
	for (const key in obj) {
		if (!obj.hasOwnProperty(key)) continue
		return obj[key].find((item: IMaterial) => item.id === id)
	}
}


export const RecipeContext = createContext<Partial<IContext>>({})

export const RecipeProvider = ({ children }: IProvider) => {

	const [ingredients, setIngredients]: any = useState([])
	const [time, setTime] = useState(0)
	const [hearts, setHearts] = useState(0)
	const [price, setPrice] = useState(0)
	const [buff, setBuff] = useState()

	useEffect(() => {
		setTime(extraTime(ingredients) + (ingredients.length * 30))
		setPrice(priceCalculator(ingredients))
		setHearts(heartsCalculator(ingredients))
		setBuff(parseBuff(ingredients))
	}, [ingredients])

	return (
		<RecipeContext.Provider
			value={{
				ingredients,
				time,
				hearts,
				price,
				buff,
				updateIngredients: (id) => {
					const itemData = findById(materials, id)

					setIngredients((prevIngredients: Array<object>) => [...prevIngredients, itemData])
				},
				resetState: () => {
					setIngredients([])
					setTime(0)
					setHearts(0)
					setBuff('')
				},
				removeIngredient: (index) => {
					const newIngredients = ingredients.filter((_: object, i: number) => {
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
