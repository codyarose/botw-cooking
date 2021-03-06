import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { ReactComponent as RupeeIcon } from 'icons/rupee.svg'

interface IPriceContainer {
	price: number
}

export const PriceContainer = ({ price }: IPriceContainer) => {
	return (
		<StyledPrice>
			<RupeeIcon />
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
	svg {
		margin-right: 4px;
	}
`
