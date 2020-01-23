import React, { useState, useCallback } from 'react'
import LazyLoad from 'react-lazy-load'
import { Transition } from 'react-transition-group'

interface Props {
	height: number | string
	duration: number
	easing: string
	children: (onLoad: any) => any
}

const getStyle = (duration: number, easing: string) => ({
	transition: `opacity ${duration}ms ${easing}`,
	opacity: 0,
	display: 'inline-block',
	height: '100%',
})

const transitionStyles: any = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
}


export const FadeIn: React.FC<Props> = ({ height, duration, easing, children }) => {
	const [loaded, setLoaded] = useState(false)

	const onLoad = useCallback(() => setLoaded(true), [])

	return (
		<LazyLoad height={height} offset={150}>
			<Transition in={loaded} timeout={duration ? duration : 200}>
				{loaded =>
					<div style={{ ...getStyle(duration!, easing!), ...transitionStyles[loaded] }}>
						{children(onLoad)}
					</div>
				}
			</Transition>
		</LazyLoad>
	)
}
