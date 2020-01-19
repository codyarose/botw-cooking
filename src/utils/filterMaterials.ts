import { materials } from 'materials'

export const filterMaterials = (term: string, key: any, category: string) => {
	const termPattern = new RegExp(term, 'i')
	const categoryPattern = new RegExp(category, 'i')

	const filteredByTerm = materials.filter((obj: any) => termPattern.test(obj[key]))
	const filteredByCategory = filteredByTerm.filter((obj: any) => categoryPattern.test(obj['tags']))

	return category === 'all' ? filteredByTerm : filteredByCategory
}
