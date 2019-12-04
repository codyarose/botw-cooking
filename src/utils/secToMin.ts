export const secToMin = (seconds: number) => {
	const firstSpace = seconds >= 600 ? 14 : 15
	const secondSpace = firstSpace === 14 ? 5 : 4
	return (
		new Date(seconds * 1000).toISOString().substr(firstSpace, secondSpace)
	)
}
