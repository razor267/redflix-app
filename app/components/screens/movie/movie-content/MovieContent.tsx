import React, {FC, useRef} from 'react'
import {Animated, ScrollView, View} from 'react-native'
import {useScrollToTop} from '@react-navigation/native'
import {IMovieComponent} from '../movie-page.interface'
import MovieInfo from './MovieInfo'
import ActorCarousel from './ActorCarousel'
import RelatedMovies from './RelatedMovies'

const MovieContent: FC<IMovieComponent> = ({movie}) => {
    const ref = useRef<ScrollView>(null)
    useScrollToTop(ref)

    return (
        <Animated.ScrollView ref={ref} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
            <MovieInfo movie={movie}/>
            <View className='bg-[#090909] px-6 pt-1 pb-24'>
                {/*player*/}
                <ActorCarousel actors={movie.actors}/>
                <RelatedMovies currentMovieId={movie._id} genreIds={movie.genres.map(({_id}) => _id)}/>
            </View>
        </Animated.ScrollView>
    )
}

export default MovieContent