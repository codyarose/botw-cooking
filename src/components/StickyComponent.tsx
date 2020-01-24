import React, { FC, createRef, useEffect } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'

export const StickyComponent: FC = ({ children }) => {
	const { toggleSticky } = useRecipeValue()
	const ref = createRef<HTMLDivElement>()

	useEffect(() => {
		const cachedRef: any = ref.current,
			observer = new IntersectionObserver(
				([e]) => toggleSticky!(e.intersectionRatio < 1),
				{ threshold: [1] }
			)
		observer.observe(cachedRef)

		return () => observer.unobserve(cachedRef)
	}, [ref, toggleSticky])

	return (
		<StyledSticky ref={ref}>
			{children}
		</StyledSticky>
	)
}

export const StyledSticky = styled.div`
	position: sticky;
	top: -1px;
	overflow: hidden;
	z-index: 2;
`
