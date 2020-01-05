import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HourglassIcon } from 'icons/hourglass.svg'
import { secToMin } from 'utils/secToMin'

interface ITime {
	seconds: number
}

export const Time = ({ seconds }: ITime) => {
	return (
		<StyledTime>
			<HourglassIcon /> {secToMin(seconds)}
		</StyledTime>
	)
}

const StyledTime = styled.div`
	display: flex;
	align-items: center;
	color: var(--botw-text-green);
	line-height: 1.2;
	svg {
		width: 0.7em;
		margin-right: 4px;
	}
`
