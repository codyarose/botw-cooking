import React, { SFC } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Heart } from 'components/Heart'

interface IHearts {
	amount: number
}

export const HeartsContainer: SFC<IHearts> = ({ amount }) => {
	const { buff } = useRecipeValue()

	const heartsCount = buff && buff.type === 'temp-hearts' ? buff.potency : amount
	const heartsType = buff && buff.type === 'temp-hearts' ? 'temp' : 'normal'

	const abbrHearts = heartsCount ? heartsCount - (heartsCount % 5) : 0
	const wholeHearts = Math.floor(heartsCount)
	const renderedWholeHearts = wholeHearts > 6 ? (wholeHearts - abbrHearts) : wholeHearts
	const partialHeart = heartsCount % 1

	const repeatHearts = (count: number, type: string) => {
		return [...Array(count)].map((_, i) => <Heart key={i} size={1} type={type} />)
	}

	return (
		<StyledHeartsWrap>
			{heartsType === 'temp' && 'Full Recovery '}
			{heartsCount > 6 && <Heart size={1} abbr={abbrHearts} type={heartsType} />}
			{heartsCount > 0 && repeatHearts(renderedWholeHearts, heartsType)}
			{partialHeart > 0 && <Heart size={partialHeart} type={heartsType} />}
		</StyledHeartsWrap>
	)
}
const StyledHeartsWrap = styled.div`
			display: flex;
		`


// 1. normal hearts
// 2. normal hearts abbreviated
// 3. full recovyer plus temp hearts
