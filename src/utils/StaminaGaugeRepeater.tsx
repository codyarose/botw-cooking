import React from 'react'
import { StaminaGauge, IStaminaGauge } from 'components/StaminaGauge'

const minMax = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), max)
}

export const StaminaGaugeRepeater = ({ progress, type }: IStaminaGauge) => {
	let staminaCount = 0
	if (type === 'stamina') {
		const multiplier = progress === 10 ? 1.4 : 1.333
		staminaCount = minMax(progress < 3 ? progress : Math.round(progress * multiplier), 0, 15)
	} else if (type === 'enduras') {
		staminaCount = minMax(progress < 4 ? 1 : Math.floor(progress / 2), 0, 10)
	}
	const wholeGauges = Math.floor(staminaCount / 5)
	const partialGauge = staminaCount % 5
	const repeatGauge = () => {
		return [...Array(wholeGauges)].map((_, i) => <StaminaGauge key={i} progress={5} type={type} />)
	}

	return (
		<>
			{repeatGauge()}{partialGauge > 0 && <StaminaGauge progress={partialGauge} type={type} />}
		</>
	)
}
