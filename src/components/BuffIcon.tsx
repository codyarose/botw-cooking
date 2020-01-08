import React from 'react'
import styled from 'styled-components'
import { StaminaGaugeRepeater } from 'utils/StaminaGaugeRepeater'
import { ReactComponent as HastyIcon } from 'icons/hasty.svg'
import { ReactComponent as SneakyIcon } from 'icons/sneaky.svg'
import { ReactComponent as MightyIcon } from 'icons/mighty.svg'
import { ReactComponent as ToughIcon } from 'icons/tough.svg'
import { ReactComponent as FireproofIcon } from 'icons/fireproof.svg'
import { ReactComponent as SpicyIcon } from 'icons/spicy.svg'
import { ReactComponent as ChillyIcon } from 'icons/chilly.svg'
import { ReactComponent as ElectroIcon } from 'icons/electro.svg'
import { ReactComponent as StaminaIcon } from 'icons/stamina.svg'
import { ReactComponent as HeartIcon } from 'icons/heart.svg'

export interface IBuffIcon {
	type?: string
	potency?: number
	emblem?: boolean
}

export const BuffIcon = ({ type, potency, emblem }: IBuffIcon) => {

	const level = () => {
		if (
			type === 'stamina' ||
			type === 'enduras' ||
			type === 'temp-hearts'
		) return

		switch (type) {
			case 'attack':
			case 'defense':
			case 'speed':
				return potency! >= 7 ? 3 : potency! >= 5 ? 2 : 1
			case 'cold resist':
			case 'heat resist':
				return potency! >= 6 ? 2 : 1
			case 'fireproof':
				return potency! >= 7 ? 2 : 1
			case 'shock resist':
				return potency! >= 6 ? 3 : potency! >= 4 ? 2 : 1
			case 'stealth':
				return potency! >= 9 ? 3 : potency! >= 6 ? 2 : 1
		}
	}

	const icon = (i?: number) => {
		switch (type) {
			case 'stamina':
			case 'enduras':
				return emblem ?
					<StaminaIcon color={type === 'stamina' ? 'var(--botw-stamina)' : 'var(--botw-yellow)'} key={i} />
					: <StaminaGaugeRepeater key={i} progress={potency! | 0} type={type} />
			case 'attack':
				return <MightyIcon key={i} />
			case 'cold resist':
				return <SpicyIcon key={i} />
			case 'defense':
				return <ToughIcon key={i} />
			case 'fireproof':
				return <FireproofIcon key={i} />
			case 'heat resist':
				return <ChillyIcon key={i} />
			case 'shock resist':
				return <ElectroIcon key={i} />
			case 'speed':
				return <HastyIcon key={i} />
			case 'stealth':
				return <SneakyIcon key={i} />
			default:
				return emblem && type === 'temp-hearts' && <HeartIcon key={i} color="var(--botw-yellow)" />
		}
	}

	return (
		<StyledBuffIconContainer>
			{[...Array(level())].map((_, i) => icon(i))}
		</StyledBuffIconContainer>
	)
}

const StyledBuffIconContainer = styled.div`
	display: flex;
	svg {
		margin-right: 5px;
	}
`
