import React, { useState, createContext, useContext, ReactNode, FormEvent } from 'react'

interface IContext {
	data: any
	updateState: any
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
}

export const RecipeContext = createContext<Partial<IContext>>({})

export const RecipeProvider = ({ children }: IProvider) => {
	const initialState = {
		ingredients: 0,
		price: 0,
		hearts: 0,
		duration: 0,
	}

	const [state, setState] = useState<IState>(initialState)

	let { ingredients, price, hearts, duration } = state

	return (
		<RecipeContext.Provider
			value={{
				data: state,
				updateState: (e: FormEvent<HTMLInputElement>) => {
					let target = e.currentTarget.dataset
					setState({
						...state,
						ingredients: ingredients += 1,
						price: price += Number(target.price),
						hearts: hearts += Number(target.hearts) * 2,
						duration: duration += Number(target.duration),
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
