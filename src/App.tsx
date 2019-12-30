import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { RecipeProvider } from './components/Context'
import { MaterialsContainer } from './containers/MaterialsContainer'
import { OutputContainer } from './containers/OutputContainer'

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<StyledAppContainer>
				<RecipeProvider>
					<OutputContainer />
					<MaterialsContainer />
				</RecipeProvider>
			</StyledAppContainer>
		</Fragment>
	);
}

export default App;

const StyledAppContainer = styled.div`
	position: relative;
	padding: 3rem;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.25)),
			url(${require(`./background.jpg`)}) no-repeat center / cover;
		width: 100%;
		height: 100%;
		filter: blur(5px);
		transform: translate(-50%,-50%) scale(1.1);
		z-index: -1;
	}
`

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		color: #fff;
		font-family: Arial, sans-serif;
	}
`
