import React, {memo} from 'react'
import {FlatList, FlatListProps, Platform} from 'react-native'

const HorizontalList = <T extends any>(props: FlatListProps<T>) => {
    return (
        <FlatList
            horizontal
            renderToHardwareTextureAndroid
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
            {...props}
        ></FlatList>
    )
}

export default memo(HorizontalList)