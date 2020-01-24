import React, { FC } from 'react'
import { FadeIn } from 'components/FadeIn'
import { Button } from 'components/Button'
import Media from 'react-media'
import { LocationIcon } from 'components/LocationIcon'
import { IMaterial } from 'utils/interfaces'
import { useRecipeValue } from 'components/Context'
import styled from 'styled-components'

interface Props {
	array?: IMaterial[]
	readonly buttonDisabled?: boolean
	onClickType?: string
}

export const ListMaterials: FC<Props> = ({ array, buttonDisabled, onClickType }) => {
	const { updateIngredients, removeIngredient } = useRecipeValue()
	return (
		<StyledListMaterials buttonDisabled={buttonDisabled}>
			{array && array.map(({ name, id, buff, locations }, index) => {
				const imageName = name.replace(/\s/g, "-").toLowerCase()
				const itemKey = onClickType === 'update' ? id : name + index++
				return (
					<FadeIn key={itemKey} height={'auto'} duration={200} easing={'ease-in-out'}>
						{onLoad => (
							<Button
								disabled={buttonDisabled}
								onClick={() => {
									onClickType === 'update' ? updateIngredients!(id)
										: onClickType === 'remove' && removeIngredient!(index)
								}}
								buff={buff!.type}
								tabIndex={0}
							>
								<Media query="(min-width: 735px)" render={() => (
									<LocationIcon content={locations} />
								)} />
								<picture onLoad={onLoad}>
									<source type="image/webp" srcSet={`images/${imageName}.webp`} />
									<source type="image/png" srcSet={`images/${imageName}.png`} />
									<img src={`images/${imageName}.png`} alt={name} />
								</picture>
								<span className="material__name">{name}</span>
							</Button >
						)}
					</FadeIn>
				)
			})}
		</StyledListMaterials>
	)
}

const StyledListMaterials = styled.div<Props>`
	--auto-grid-min-size: 6rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	gap: 2rem;
	${({ buttonDisabled }) => buttonDisabled && 'pointer-events: none;'}
	@media screen and (max-width: 50rem) {
		gap: 1.5rem;
	}
	@media screen and (max-width: 40rem) {
		--auto-grid-min-size: 5rem;
	}
	@media screen and (max-width: 28rem) {
		--auto-grid-min-size: 4rem;
		gap: 1rem;
	}
`
