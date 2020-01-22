import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react'
import { useLocalStorage } from 'utils/useLocalStorage'
import { materials } from 'materials'
import { extraTime } from 'utils/extraTime'
import { priceCalculator } from 'utils/priceCalculator'
import { heartsCalculator } from 'utils/heartsCalculator'
import { parseBuff } from 'utils/parseBuff'
import { IMaterial, IBuff } from 'utils/interfaces'

interface IContext {
	ingredients: IMaterial[]
	time: number
	hearts: number
	price: number
	buff: IBuff
	filters: {
		term: string
		category: string
	}
	isSticky: boolean
	updateIngredients: (id: number) => void
	resetState: () => void
	removeIngredient: (index: number) => void
	handleFilter: (term: string, category: string) => any
	toggleSticky: (value: boolean) => void
}

interface IProvider {
	children: ReactNode
}

const findById = (array: IMaterial[], id: number) => {
	return array.find((item: IMaterial) => item.id === id)
}

export const RecipeContext = createContext<Partial<IContext>>({})

export const RecipeProvider = ({ children }: IProvider) => {

	const [ingredients, setIngredients] = useLocalStorage('ingredients', [])
	const [time, setTime] = useState(0)
	const [hearts, setHearts] = useState(0)
	const [price, setPrice] = useState(0)
	const [buff, setBuff] = useState()
	const [filters, setFilters] = useState({ term: "", category: "all" })
	const [isSticky, setIsSticky] = useState(false)

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
				filters,
				isSticky,
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
				},
				handleFilter: (term, category) => setFilters({ ...filters, term, category }),
				toggleSticky: (value) => setIsSticky(value)
			}}
		>
			{children}
		</RecipeContext.Provider>
	)
}

export const useRecipeValue = () => useContext(RecipeContext)
