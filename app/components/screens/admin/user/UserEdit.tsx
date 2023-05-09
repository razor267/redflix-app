import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {Control, Controller, useForm} from 'react-hook-form'
import {IUserEditInput} from '@/shared/types/user.interface'
import {useUserEdit} from './useUserEdit'
import {AdminNavigation, Button, Layout, Loader} from '@/components/ui'
import AuthFields from '@/components/screens/auth/AuthFields'
import {IAuthFormData} from '@/shared/types/auth.interface'
import {Pressable} from 'react-native'
import ExpoCheckbox from 'expo-checkbox'
import {getColor} from '@/config/colors.config'

const UserEdit: FC = () => {

    const {control, setValue, handleSubmit} = useForm<IUserEditInput>({mode: 'onChange'})

    const {isLoading, onSubmit} = useUserEdit(setValue)

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Edit user' isBackButton/>
            <View>
                {isLoading
                    ? <Loader/>
                    : <>
                        <AuthFields control={control as unknown as Control<IAuthFormData>}/>
                        <Controller
                            control={control}
                            name='isAdmin'
                            render={({field: {onChange, value}}) => (
                                <Pressable onPress={() => onChange(!value)} className='my-5 w-40 flex-row items-center'>
                                    <ExpoCheckbox
                                        value={value}
                                        onValueChange={onChange}
                                        color={value ? getColor('primary') : undefined}
                                    />
                                    <Text className='text-white text-base ml-2.5'>
                                        Admin rights
                                    </Text>
                                </Pressable>)
                            }
                        />
                        <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
                            Update
                        </Button>
                    </>}
            </View>
        </Layout>
    )
}

export default UserEdit