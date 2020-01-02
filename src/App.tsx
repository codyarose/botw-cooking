import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from 'components/Header'
import { RecipeProvider } from './components/Context'
import { MaterialsContainer } from './containers/MaterialsContainer'
import { OutputContainer } from './containers/OutputContainer'

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<StyledAppContainer>
				<StyledAppBackground>
					<picture>
						<source type="image/webp" srcSet={`images/background.webp`} />
						<source type="image/jpeg" srcSet={`images/background.jpg`} />
						<img src={`images/background.jpg`} alt="" />
					</picture>
				</StyledAppBackground>
				<Header />
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
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25));
		width: 100%;
		height: 100%;
		z-index: -1;
	}
`

const StyledAppBackground = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 101%;
	height: 101%;
	z-index: -2;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(5px);
	}
`

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		color: #fff;
		font-family: Roboto, sans-serif;
	}
`
