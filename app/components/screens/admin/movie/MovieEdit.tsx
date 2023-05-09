import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {useForm} from 'react-hook-form'
import {IUserEditInput} from '@/shared/types/user.interface'
import {useMovieEdit} from './useMovieEdit'
import {AdminNavigation, Button, Layout, Loader} from '@/components/ui'
import {IMovieEditInput} from '@/shared/types/movie.interface'

const MovieEdit: FC = () => {

    const {control, setValue, handleSubmit} = useForm<IMovieEditInput>({mode: 'onChange'})

    const {isLoading, onSubmit} = useMovieEdit(setValue)

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Edit movie' isBackButton/>
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

export default MovieEdit