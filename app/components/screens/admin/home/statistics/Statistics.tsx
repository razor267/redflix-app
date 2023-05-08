import React, {FC} from 'react'
import {View} from 'react-native'
import CountUsers from './CountUsers'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
    return (
        <View className='flex item-stretch'>
            <CountUsers/>
            <PopularMovies/>
        </View>
    )
}

export default Statistics