import React, { useState } from 'react';
import { Button } from './components/Button'
import { secToMin } from './utils/secToMin'

const App: React.FC = () => {
	const initialState = {
		price: 0,
		hearts: 0,
		duration: 0,
	}
	const [recipe, setRecipe] = useState(initialState);

	const handleClick = (price: number, hearts: number, duration: number) => {
		setRecipe({
			...recipe,
			price: recipe.price += price,
			hearts: recipe.hearts += (hearts * 2),
			duration: recipe.duration += duration,
		})
	}

	const handleReset = () => {
		setRecipe(initialState)
	}

	return (
		<div>
			<div>Price: {recipe.price}</div>
			<div>Hearts: {recipe.hearts}</div>
			<div>Duration: {secToMin(recipe.duration)}</div>
			<Button onClick={() => handleClick(10, 0.5, 30)}>apple</Button>
			<Button onClick={() => handleClick(20, 0.5, 50)}>banana</Button>
			<Button onClick={() => handleReset()}>reset</Button>
		</div>
	);
}

export default App;

// each ingredient is additive

// single state that shows the total state of the ingredients added
//	price
//	hearts
//	duration
//	extra hearts
//	stamina
//	extra stamina
//	resistance
//	cold
//	heat
//	electric
//	fire
//	buff
//	hasty
//	sneaky
//	mighty
//	tough
//	elixir
//	bonus

// buttons for each ingredient that add modifies to the state

// MATH
// 	Total Health per ingredient when cooked:
// 		heart value * 2, ex: apple(.5 hearts) cooked adds 1 heart

// 3 x bananas
// 3 hearts
// 50 + 50 + 50 = 150 / 60 = 2.5 = 2 mins 30 sec

// 1 x bananas + 2 x apples
// 3 hearts
// 50 + 30 + 30 = 110 / 60 = 1min 50sec

// 2 peppers + 1 rushroom + 1 apple
// 4 hearts
// 150 + 150 + 60 + 30 = 390 / 60 = 6: 30
