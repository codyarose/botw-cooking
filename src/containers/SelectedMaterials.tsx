import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useRecipeValue } from 'components/Context'
import { Button } from 'components/Button'
import { IMaterial } from 'utils/interfaces'

export const SelectedMaterials = ({ selected }: any) => {
	const { removeIngredient, resetState } = useRecipeValue()

	const listIngredients = selected.map((item: IMaterial, index: number) =>
		<Button
			key={item.id + index++}
			onClick={() => removeIngredient && removeIngredient(index)}
		>
			<picture>
				<source type="image/webp" srcSet={`images/${item.id}.webp`} />
				<source type="image/png" srcSet={`images/${item.id}.png`} />
				<img src={`images/${item.id}.png`} alt={item.name} />
			</picture>
			<span className="material__name">{item.name}</span>
		</Button>
	)
	return (
		<Fragment>
			{selected.length < 1
				? <StyledDefaultText>Add an ingredient</StyledDefaultText>
				: <StyledSelectedMaterials>
					{selected.length > 0 &&
						<Button onClick={resetState}>
							<svg width="50" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path fill="currentColor" d="M12 8h27.711c6.739 0 12.157 5.548 11.997 12.286l-2.347 98.568C93.925 51.834 170.212 7.73 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.835 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.322 0 196-87.662 196-196 0-108.322-87.662-196-196-196-79.545 0-147.941 47.282-178.675 115.302l126.389-3.009c6.737-.16 12.286 5.257 12.286 11.997V212c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V20C0 13.373 5.373 8 12 8z" />
							</svg>
						</Button>
					}
					{listIngredients}
				</StyledSelectedMaterials>
			}
		</Fragment>
	)
}

const StyledSelectedMaterials = styled.div`
	--auto-grid-min-size: 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	padding-bottom: 3rem;
	@media screen and (max-width: 64rem) {
		--auto-grid-min-size: 6rem;
	}
	@media screen and (max-width: 46rem) {
		grid-gap: 1.5rem;
	}
	@media screen and (max-width: 37.5rem) {
		padding-bottom: 1.5rem;
	}
	@media screen and (max-width: 28rem) {
		--auto-grid-min-size: 4rem;
	}
`

const StyledDefaultText = styled.div`
	text-align: center;
	font-style: italic;
	letter-spacing: 0.02em;
	color: rgba(255,255,255,.5);
`
