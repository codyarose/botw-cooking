import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from 'components/Header'
import { RecipeProvider } from 'components/Context'
import { MaterialsContainer } from 'containers/MaterialsContainer'
import { OutputContainer } from 'containers/OutputContainer'
import { FiltersContainer } from 'containers/FiltersContainer'

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<StyledAppContainer>
				<StyledAppBackground>
					<img src={`images/background.jpg`} alt="" />
				</StyledAppBackground>
				<Header />
				<RecipeProvider>
					<OutputContainer />
					<FiltersContainer />
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
	min-height: 100vh;
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
		filter: blur(15px);
	}
`

const GlobalStyle = createGlobalStyle`
	:root {
		--botw-text-green: #86dfae;
		--botw-red: #F53D3F;
		--botw-yellow: #FEFB39;
		--botw-stamina: #09F151;
	}
	body {
		margin: 0;
		color: #fff;
		font-family: Roboto, sans-serif;
	}
`
