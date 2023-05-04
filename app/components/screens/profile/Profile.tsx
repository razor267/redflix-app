import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import AuthFields from '@/components/screens/auth/AuthFields'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Loader } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<View className='mt-20 px-10'>
			<Heading title='Profile' />

			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button icon={'edit'} onPress={handleSubmit(onSubmit)}>
						Update profile
					</Button>
				</View>
			)}

			<Pressable
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name={'logout'} size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
			{/*<Pressable onPress={() => deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)}>
				<Text className='text-white'>Clear accessToken</Text>
			</Pressable>
			<Pressable onPress={() => deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)}>
				<Text className='text-white'>Clear refreshToken</Text>
			</Pressable>
			<Pressable
				onPress={() =>
					getItemAsync(EnumSecureStore.ACCESS_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-white'>Show accessToken</Text>
			</Pressable>
			<Pressable
				onPress={() =>
					getItemAsync(EnumSecureStore.REFRESH_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-white'>Show refreshToken</Text>
			</Pressable>*/}
		</View>
	)
}

export default Profile
