import React, { SFC } from 'react'
import styled from 'styled-components'
import { Heart } from '../components/Heart'

interface IHearts {
	amount: any
}

export const HeartsContainer: SFC<IHearts> = ({ amount }) => {
	const wholeHearts = Math.floor(amount)
	const partialHeart = amount % 1

	const repeatHearts = [...Array(wholeHearts)].map((_, i) => {
		return (
			<Heart key={i} size={1} />
		)
	})

	return (
		<StyledHeartsWrap>
			Hearts:
			{amount > 0 && repeatHearts}
			{partialHeart > 0 && <Heart size={partialHeart} />}
		</StyledHeartsWrap>
	)
}
const StyledHeartsWrap = styled.div`
	display: flex;
`
