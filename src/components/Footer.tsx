import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as GithubIcon } from 'icons/github.svg'

interface Props {

}

export const Footer: FC<Props> = () => {
	return (
		<StyledFooter>
			<StyledFooterContent>
				<a href="https://codyrose.co" title="Cody's GitHub Profile">
					<GithubIcon />
				</a>
			</StyledFooterContent>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	color: #fff;
	text-align: center;
	margin-top: 2rem;
	@media screen and (max-width: 46rem) {
		margin-top: 1rem;
	}
	a {
		color: currentColor;
	}
`
const StyledFooterContent = styled.div`
	max-width: 64rem;
	margin: 0 auto;
	padding: 1.5rem 3rem;
`
