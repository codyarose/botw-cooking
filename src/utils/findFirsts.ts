const removeDuplicates = (array: Array<object>) => (
	array.filter((element: any, index: number) =>
		array.indexOf(element) === index
	)
)

export const findFirsts = (array: object[], term: any) => {
	// Filters array for only ingredients that have the 'first' key
	const hasFirstKey = array.filter((element: any) => element.first !== null)
	// Filters hasFirstKey by term
	const filterByTerm = hasFirstKey.filter((element: any) => ((element || {}).first || {})[term])
	// Removes duplicate ingredients because the extra time only applies to
	// the first occurrence of that ingredient
	return removeDuplicates(filterByTerm)
}
