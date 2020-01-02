import React from 'react'
import styled from 'styled-components'

export const StaminaGauge = ({ progress, type }: any) => {
	const radius = 7
	const strokeWidth = 6
	const circumference = radius * 2 * Math.PI
	const strokeDashoffset = circumference - progress / 100 * circumference
	const color = type === 'stamina' ? '#09F151' : 'yellow'

	return (
		<StyledSVG
			height={radius * 4}
			width={radius * 4}
		>
			<circle
				stroke={color}
				fill="transparent"
				strokeWidth={strokeWidth}
				strokeDasharray={`${circumference} ${circumference}`}
				style={{ strokeDashoffset }}
				r={radius}
				cx={radius * 2}
				cy={radius * 2}
			/>
		</StyledSVG>
	)
}

const StyledSVG = styled.svg`
	circle {
		transform: scaleX(-1) rotate(-90deg);
		transform-origin: 50% 50%;
	}
`
