import React, { useState, createContext, useContext, ReactNode } from 'react'
import { materials } from '../materials'

interface IContext {
	data: any
	updateState: any
	updateState2: any
	resetState: any
}

interface IProvider {
	children: ReactNode
}

interface IState {
	ingredients: number
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
		ingredients: 0,
		price: 0,
		hearts: 0,
		duration: 0,
		time: 0
	}

	const [state, setState] = useState<IState>(initialState)

	let { ingredients, price, hearts, duration } = state

	return (
		<RecipeContext.Provider
			value={{
				data: state,
				updateState: (id: string) => {
					const itemData = findById(materials, id)
					const buffTime = parseBuff(itemData.buff)
					setState({
						...state,
						ingredients: ingredients += 1,
						price: price += itemData.price,
						hearts: hearts += itemData.hearts * 2,
						duration: duration += buffTime!,
						time: duration + (ingredients * 30)
					})
				},
				resetState: () => {
					setState(initialState)
				}
			}}
		>
			{children}
		</RecipeContext.Provider>
	)
}

export const useRecipeValue = () => useContext(RecipeContext)
