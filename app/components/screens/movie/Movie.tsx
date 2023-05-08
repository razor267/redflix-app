import React, {FC, useRef} from 'react'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import {useMovie} from '@/components/screens/movie/useMovie'
import {Layout, Loader} from '@/components/ui'
import MovieContent from '@/components/screens/movie/movie-content/MovieContent'
import {Animated} from 'react-native'

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current

	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} y={y}/>
			<MovieBackground movie={movie} y={y}/>
			<MovieContent movie={movie} y={y}/>
		</Layout>
	)
}

export default Movie
