import { minMax } from 'utils/minMax'

export const secToMin = (seconds: number) => {
	const adjustedSeconds = minMax(seconds, 0, 1800)

	return (
		new Date(adjustedSeconds * 1000).toISOString().substr(14, 5)
	)
}
