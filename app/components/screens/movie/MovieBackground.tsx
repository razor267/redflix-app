import {LinearGradient} from 'expo-linear-gradient'
import React, {FC} from 'react'
import {Animated, Image, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {getMediaSource} from '@/utils/getMediaSource'
import {IMovieComponent} from './movie-page.interface'
import {HEADER_HEIGHT, inputRange} from './movie.constant'
import insert from 'react-hook-form/dist/utils/insert'

const MovieBackground: FC<IMovieComponent> = ({movie, y}) => {
    const {top} = useSafeAreaInsets()

    const scale = y.interpolate({
        inputRange,
        outputRange: [2, 1, 1],
        extrapolate: 'clamp'
    })

    const translateY = y.interpolate({
        inputRange,
        outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.01]
    })

    return (
        <Animated.View style={[{
            ...StyleSheet.absoluteFillObject,
            height: HEADER_HEIGHT * 1.76,
            marginTop: -top,
            transform: [{scale}, {translateY}]
        }]}>
            <Image
                style={StyleSheet.absoluteFill}
                source={getMediaSource(movie.poster)}
                resizeMode='cover'
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.2)', '#090909']}
                end={[0, 0.8]}
                start={[0, 0.3]}
                style={{...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6}}
            />
        </Animated.View>
    )
}

export default MovieBackground
