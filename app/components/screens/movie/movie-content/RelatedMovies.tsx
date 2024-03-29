import React, {FC} from 'react'
import {View, Text, ListRenderItemInfo} from 'react-native'
import {useRelatedMovies} from './useRelatedMovies'
import {Loader, MovieItem} from '@/components/ui'
import HorizontalList from '@/components/ui/HorizontalList'
import {IMovie} from '@/shared/types/movie.interface'

interface IRelatedMovies {
    genreIds: string[]
    currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({currentMovieId, genreIds}) => {

    const {data, isLoading} = useRelatedMovies(genreIds, currentMovieId)

    if (isLoading) return <Loader/>
    if (!data?.length) return null

    return (
        <View className='my-8'>
            <Text className='text-white text-2xl font-semibold mb-5'>Related movies</Text>
            <HorizontalList
                snapToInterval={160}
                data={data}
                // @ts-ignore
                renderItem={({item: movie, index}: ListRenderItemInfo<IMovie>) => <MovieItem
                    index={index}
                    movie={movie}
                    key={movie._id}
                    style={{marginRight: 16, width: 144}}/>}
            />
        </View>
    )
}

export default RelatedMovies