import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native'

interface ILayout {
	className?: string
	style?: StyleProp<ViewStyle>
	isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	style,
	isHasPadding,
	className
}) => {
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('pt-5 flex-1', className, {
					'px-6': isHasPadding
				})}
				style={style}
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
