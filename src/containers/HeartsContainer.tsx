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

	const repeatHearts = (count: number, type: string) => {
		return [...Array(count)].map((_, i) => <Heart key={i} size={1} type={type} />)
	}

	return (
		<StyledHeartsWrap>
			Hearts:
			{amount > 6 && <Heart size={1} abbr={abbrHearts} type={'normal'} />}
			{amount > 0 && repeatHearts(renderedWholeHearts, 'normal')}
			{partialHeart > 0 && <Heart size={partialHeart} type={'normal'} />}
		</StyledHeartsWrap>
	)
}
const StyledHeartsWrap = styled.div`
			display: flex;
		`
