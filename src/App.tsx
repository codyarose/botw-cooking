import React from 'react';
import { RecipeProvider } from './components/Context'
import { MaterialsContainer } from './containers/MaterialsContainer'
import { OutputContainer } from './containers/OutputContainer'

const App: React.FC = () => {
	return (
		<RecipeProvider>
			<OutputContainer />
			<MaterialsContainer />
		</RecipeProvider>
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
