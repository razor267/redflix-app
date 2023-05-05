import React, { FC } from 'react'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import MovieInfo from '@/components/screens/movie/MovieInfo'
import { useMovie } from '@/components/screens/movie/useMovie'
import { Layout, Loader } from '@/components/ui'

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieInfo movie={movie} />
		</Layout>
	)
}

export default Movie
