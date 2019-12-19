import React, { SFC } from 'react'
import styled from 'styled-components'
import { Heart } from '../components/Heart'

interface IHearts {
	amount: any
}

export const HeartsContainer: SFC<IHearts> = ({ amount }) => {
	const abbrHearts = amount - (amount % 5)
	const wholeHearts = Math.floor(amount)
	const renderedWholeHearts = wholeHearts > 6 ? (wholeHearts - abbrHearts) : wholeHearts
	const partialHeart = amount % 1

	const repeatHearts = [...Array(renderedWholeHearts)].map((_, i) => {
		return <Heart key={i} size={1} />
	})

	return (
		<StyledHeartsWrap>
			Hearts:
			{amount > 6 && <Heart size={1} abbr={abbrHearts} />}
			{amount > 0 && repeatHearts}
			{partialHeart > 0 && <Heart size={partialHeart} />}
		</StyledHeartsWrap>
	)
}
const StyledHeartsWrap = styled.div`
			display: flex;
		`
