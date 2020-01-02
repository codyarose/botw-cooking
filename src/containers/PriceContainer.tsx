import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

export const PriceContainer = ({ price }: any) => {
	return (
		<StyledPrice>
			<picture>
				<source type="image/webp" srcSet={`rupee.webp`} />
				<source type="image/png" srcSet={`rupee.png`} />
				<img src={`rupee.png`} alt="Rupee Icon" />
			</picture>
			<CountUp
				end={price || 0}
				redraw={true}
				preserveValue={true}
			/>
		</StyledPrice>
	)
}

const StyledPrice = styled.div`
	display: flex;
	align-items: center;
	font-style: italic;
`
