import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {AdminService} from '@/services/admin.service'
import {useScaleOnMount} from '@/hooks/useScaleOnMount'
import {Loader} from '@/components/ui'
import Animated from 'react-native-reanimated'
import {STYLE_BLOCK} from './statistics.styles'

const CountUsers: FC = () => {
    const {data, isLoading} = useQuery(['get count users'], () => AdminService.getCountUsers())

    const {styleAnimation} = useScaleOnMount()

    return (
        <View
            className={`items-center justify-center ${STYLE_BLOCK}`}>
            {isLoading
                ? <Loader/>
                : <Animated.Text style={styleAnimation} className='text-7xl mb-1 font-medium text-white'>
                    {data}
                </Animated.Text>}
            <Animated.Text style={styleAnimation} className='opacity-70 text-xl text-white'>
                users
            </Animated.Text>
        </View>
    )
}

export default CountUsers