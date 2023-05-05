import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { Heading, MovieItem } from '@/components/ui'
import Description from '@/components/ui/heading/Description'
import { IMovieCatalog } from '@/components/ui/movie/catalog/movie-catalog.interface'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const MovieCatalog: FC<IMovieCatalog> = ({
	movies = [],
	title,
	isBackButton,
	description
}) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>
			{description && <Description text={description} />}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{movies?.length ? (
						movies.map((movie, index) => (
							<View key={movie._id} className='mb-6'>
								<MovieItem index={index} movie={movie} style={{ width: 160 }} />
							</View>
						))
					) : (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default MovieCatalog
