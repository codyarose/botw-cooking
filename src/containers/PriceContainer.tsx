import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

export const PriceContainer = ({ price }: any) => {
	return (
		<StyledPrice>
			<img src={require(`../rupee.png`)} alt='Rupee Icon' />
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
	img {
		width: 30px;
	}
`
