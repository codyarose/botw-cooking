import React, { useState, useCallback } from 'react'
import LazyLoad from 'react-lazyload'
import { Transition } from 'react-transition-group'

interface Props {
	height: number
	children: (onLoad: any) => any
}

const duration = 300

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
	display: 'inline-block'
}

const transitionStyles: any = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
}

export const FadeIn: React.FC<Props> = ({ height, children }) => {
	const [loaded, setLoaded] = useState(false)

	const onLoad = useCallback(() => setLoaded(true), [])

	return (
		<LazyLoad height={height} offset={150} once={true}>
			<Transition in={loaded} timeout={duration}>
				{loaded =>
					<div style={{ ...defaultStyle, ...transitionStyles[loaded] }}>
						{children(onLoad)}
					</div>
				}
			</Transition>
		</LazyLoad>
	)
}
