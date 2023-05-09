import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {Control, useForm} from 'react-hook-form'
import {IUserEditInput} from '@/shared/types/user.interface'
import {useActorEdit} from './useActorEdit'
import {AdminNavigation, Button, Layout, Loader} from '@/components/ui'
import {IActorEditInput} from '@/shared/types/actor.interface'
import AuthFields from '@/components/screens/auth/AuthFields'
import {IAuthFormData} from '@/shared/types/auth.interface'

const ActorEdit: FC = () => {

    const {control, setValue, handleSubmit} = useForm<IActorEditInput>({mode: 'onChange'})

    const {isLoading, onSubmit} = useActorEdit(setValue)

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Edit actor' isBackButton/>
            <View>
                {isLoading
                    ? <Loader/>
                    : <>
                        <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
                            Update
                        </Button>
                    </>}
            </View>
        </Layout>
    )
}

export default ActorEdit