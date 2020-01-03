import React, { Fragment } from 'react'
import { StaminaGauge } from 'components/StaminaGauge'
import { ReactComponent as HastyIcon } from 'icons/hasty.svg'
import { ReactComponent as SneakyIcon } from 'icons/sneaky.svg'
import { ReactComponent as MightyIcon } from 'icons/mighty.svg'
import { ReactComponent as ToughIcon } from 'icons/tough.svg'
import { ReactComponent as FireproofIcon } from 'icons/fireproof.svg'
import { ReactComponent as SpicyIcon } from 'icons/spicy.svg'
import { ReactComponent as ChillyIcon } from 'icons/chilly.svg'
import { ReactComponent as ElectroIcon } from 'icons/electro.svg'

interface IBuffIcon {
	type: string
	potency: number
}

export const BuffIcon = ({ type, potency }: IBuffIcon) => {
	const level = () => {
		if (type === 'temp-hearts' || 'stamina' || 'enduras') return

		let levelNum = null
		switch (type) {
			case 'attack':
			case 'defense':
			case 'speed':
				levelNum = potency >= 7 ? 3 : potency >= 5 ? 2 : 1
				break
			case 'cold resist':
			case 'heat resist':
				levelNum = potency >= 6 ? 2 : 1
				break
			case 'fireproof':
				levelNum = potency >= 7 ? 2 : 1
				break
			case 'shock resist':
				levelNum = potency >= 6 ? 3 : potency >= 4 ? 2 : 1
				break
			case 'stealth':
				levelNum = potency >= 9 ? 3 : potency >= 6 ? 2 : 1
				break
		}
		return `Level: ${levelNum}`
	}

	const icon = () => {
		const staminaLevel = () => {

		}

		switch (type) {
			case 'attack':
				return <MightyIcon />
			case 'cold resist':
				return <SpicyIcon />
			case 'defense':
				return <ToughIcon />
			case 'enduras':
				return <StaminaGauge progress={75} type="enduras" />
			case 'fireproof':
				return <FireproofIcon />
			case 'heat resist':
				return <ChillyIcon />
			case 'shock resist':
				return <ElectroIcon />
			case 'speed':
				return <HastyIcon />
			case 'stamina':
				return <StaminaGauge progress={75} type="stamina" />
			case 'stealth':
				return <SneakyIcon />
			default:
				return
		}
	}
	return (
		<Fragment>
			{icon()} {level()}
		</Fragment>
	)
}
