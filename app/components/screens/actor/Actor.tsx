import React, {FC} from 'react'
import {Layout, Loader, MovieCatalog, NotFound} from '@/components/ui'
import {useActor} from '@/components/screens/actor/useActor'

const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog
					title={actor.name}
					movies={movies}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Actor
