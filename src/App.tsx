import React, { FC, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from 'components/Header'
import { RecipeProvider } from 'components/Context'
import { MaterialsContainer } from 'containers/MaterialsContainer'
import { OutputContainer } from 'containers/OutputContainer'
import { FiltersContainer } from 'containers/FiltersContainer'
import { StickyComponent } from 'components/StickyComponent'
import { Footer } from 'components/Footer'

const App: FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<StyledAppContainer>
				<StyledAppBackground aria-hidden="true">
					<picture>
						<source type="image/webp" srcSet={`images/background.webp`} />
						<source type="image/png" srcSet={`images/background.png`} />
						<img src={`images/background.png`} alt="App background" />
					</picture>
				</StyledAppBackground>
				<Header />
				<StyledMain>
					<RecipeProvider>
						<StickyComponent>
							<OutputContainer />
						</StickyComponent>
						<FiltersContainer />
						<MaterialsContainer />
					</RecipeProvider>
				</StyledMain>
				<Footer />
			</StyledAppContainer>
		</Fragment>
	);
}

export default App;

const StyledAppContainer = styled.div`
	position: relative;
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
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: -2;
	img {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 105%;
		height: 101%;
		object-fit: cover;
		filter: blur(15px);
	}
`

const StyledMain = styled.main`
	min-height: 100vh;
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
