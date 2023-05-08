import React, {FC} from 'react'
import {useHamburgerAnimation} from './useHamburgerAnimation'
import Animated from 'react-native-reanimated'

const className = 'w-6 h-0.5 bg-[#ecf0f1]'

const HamburgerAnimation: FC<{ isShow: boolean }> = ({isShow}) => {
    const animation = useHamburgerAnimation(isShow)

    return (
        <Animated.View style={animation.styleAnimation}>
            <Animated.View style={animation.transformFirstLineAnimation} className={className}/>
            <Animated.View style={animation.widthSecondLineAnimation} className={className}/>
            <Animated.View style={animation.transformThirdLineAnimation} className={className}/>
        </Animated.View>
    )
}

export default HamburgerAnimation