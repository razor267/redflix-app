import { MaterialCommunityIcons } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { withSpring } from 'react-native-reanimated'

import { useFavorite } from '@/components/ui/movie/movie-item/favorite-button/useFavorite'

import BlurButton from '../../../blur-button/BlurButton'

import { useFavoriteAnimation } from './useFavoriteAnimation'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall, movieId }) => {
	const { toggleFavorite, isSmashed } = useFavorite(movieId)
	const { liked, fillStyle, outlineStyle } = useFavoriteAnimation(isSmashed)

	return (
		<BlurButton
			className={cn({ 'w-8 h-8 rounded-lg': isSmall })}
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</Animated.View>

			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={isSmall ? 19 : 22}
					color={'#DC3F41'}
				/>
			</Animated.View>
		</BlurButton>
	)
}

export default FavoriteButton
