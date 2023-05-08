import React, {FC} from 'react'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import {useMovie} from '@/components/screens/movie/useMovie'
import {Layout, Loader} from '@/components/ui'
import MovieContent from '@/components/screens/movie/movie-content/MovieContent'

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieContent movie={movie}/>
		</Layout>
	)
}

export default Movie
