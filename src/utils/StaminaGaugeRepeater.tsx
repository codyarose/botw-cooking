import React from 'react'
import { StaminaGauge, IStaminaGauge } from 'components/StaminaGauge'

export const StaminaGaugeRepeater = ({ progress, type }: IStaminaGauge) => {
	const multiplier = progress === 10 ? 1.4 : 1.333
	const staminaCount = Math.min(Math.max((progress < 3 ? progress : Math.round(progress * multiplier)), 0), 15)
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
