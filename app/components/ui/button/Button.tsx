import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	icon,
	className,
	children,
	...rest
}) => {
	return (
		<Pressable className={cn('self-center mt-3.5', className)} {...rest}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				colors={['#DC3F41', '#a6282b']}
				className={cn('w-full py-3 px-8 rounded-2xl items-center', {
					'flex-row': !!icon
				})}
			>
				{icon && <Feather name={icon} color='white' size={18} />}
				<Text
					className={cn('text-white text-center font-medium text-lg', {
						'ml-2': !!icon
					})}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
