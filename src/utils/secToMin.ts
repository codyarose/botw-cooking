export const secToMin = (seconds: number) => {
	return (
		new Date(seconds * 1000).toISOString().substr(14, 5)
	)
}
