import { IMaterial } from './interfaces'

const removeDuplicates = (array: IMaterial[]) => (
	array.filter((element, index: number) =>
		array.indexOf(element) === index
	)
)

export const findFirsts = (array: IMaterial[], term: string) => {
	// Filters array for only ingredients that have the 'first' key
	const hasFirstKey = array.filter(({ first }) => first !== null)
	// Filters hasFirstKey by term
	const filterByTerm = hasFirstKey.filter(({ first }) => first![term])
	// Removes duplicate ingredients because the extra time only applies to
	// the first occurrence of that ingredient
	return removeDuplicates(filterByTerm)
}
