import React, { FC, createRef, useEffect } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
// import { StyledSelectedMaterials } from 'containers/SelectedMaterials'
// import { StyledOutputTextContainer } from 'containers/OutputContainer'

interface Props {
	readonly isSticky?: boolean
}

export const StickyComponent: FC<Props> = ({ children }) => {
	// const [isSticky, setIsSticky] = useState(false)
	const { toggleSticky } = useRecipeValue()
	const ref: any = createRef()

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
	z-index: 2;
`

export const StyledInnerSticky = styled.div<Props>`



		/* transition: background-color .2s ease-in-out;
		${({ isSticky }) => isSticky && 'background-color: rgba(0,0,0,0.75);'}
	}  */
`
