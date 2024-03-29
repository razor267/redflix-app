import React, {FC, useRef} from 'react'
import {Animated, ScrollView, View} from 'react-native'
import {useScrollToTop} from '@react-navigation/native'
import {IMovieComponent} from '../movie-page.interface'
import MovieInfo from './MovieInfo'
import ActorCarousel from './ActorCarousel'
import RelatedMovies from './RelatedMovies'
import {HEADER_HEIGHT} from '@/components/screens/movie/movie.constant'
import VideoPlayer from '@/components/screens/movie/VideoPlayer'

const MovieContent: FC<IMovieComponent> = ({movie, y}) => {
    const ref = useRef<ScrollView>(null)
    useScrollToTop(ref)

    return (
        <Animated.ScrollView
            ref={ref}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
                {
                    nativeEvent: {contentOffset: {y}}
                }
            ], {
                useNativeDriver: true
            })}
            contentContainerStyle={{
                paddingTop: HEADER_HEIGHT / 1.3
            }}
        >
            <MovieInfo movie={movie} y={y}/>
            <View className='bg-[#090909] px-6 pt-1 pb-24'>
                <VideoPlayer video={movie.videoUrl}/>
                <ActorCarousel actors={movie.actors}/>
                <RelatedMovies currentMovieId={movie._id} genreIds={movie.genres.map(({_id}) => _id)}/>
            </View>
        </Animated.ScrollView>
    )
}

export default MovieContent