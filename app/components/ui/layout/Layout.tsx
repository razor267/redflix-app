import cn from 'clsx'
import React, {FC, PropsWithChildren} from 'react'
import {Platform, SafeAreaView, View, ViewStyle} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

interface ILayout {
    className?: string
    style?: ViewStyle
    isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
                                                    children,
                                                    style,
                                                    isHasPadding,
                                                    className
                                                }) => {

    const {top} = useSafeAreaInsets()

    return (
        <SafeAreaView className='flex-1'>
            <View
                className={cn('flex-1', className, {
                    'px-6': isHasPadding
                })}
                style={{paddingTop: Platform.OS === 'ios' ? top / 6 : top * 1.7, ...style}}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Layout
