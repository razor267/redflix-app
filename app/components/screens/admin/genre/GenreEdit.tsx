import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {useForm} from 'react-hook-form'
import {IUserEditInput} from '@/shared/types/user.interface'
import {useGenreEdit} from './useGenreEdit'
import {AdminNavigation, Button, Layout, Loader} from '@/components/ui'
import {IGenreEditInput} from '@/shared/types/genre.interface'

const GenreEdit: FC = () => {

    const {control, setValue, handleSubmit} = useForm<IGenreEditInput>({mode: 'onChange'})

    const {isLoading, onSubmit} = useGenreEdit(setValue)

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Edit genre' isBackButton/>
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

export default GenreEdit