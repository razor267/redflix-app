import React, {FC} from 'react'
import {ScrollView, View} from 'react-native'
import {Controller, useForm} from 'react-hook-form'
import {useActorEdit} from './useActorEdit'
import {AdminNavigation, Button, Field, Layout, Loader, SlugWrapper, TextEditor} from '@/components/ui'
import {IActorEditInput} from '@/shared/types/actor.interface'
import {generateSlug} from '@/utils/generateSlug'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'

const ActorEdit: FC = () => {

    const {control, setValue, handleSubmit, getValues} = useForm<IActorEditInput>({mode: 'onChange'})

    const {isLoading, onSubmit} = useActorEdit(setValue)

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Edit actor' isBackButton/>
            <View>
                {isLoading
                    ? <Loader/>
                    : <ScrollView showsVerticalScrollIndicator={false}>
                        <Field<IActorEditInput>
                            control={control}
                            name='name'
                            placeholder='Enter name'
                            rules={{
                                required: 'Name is required!'
                            }}
                        />
                        <SlugWrapper generate={() => setValue('slug', generateSlug(getValues('name')))}>
                            <Field<IActorEditInput>
                                control={control}
                                name='slug'
                                placeholder='Enter slug'
                                rules={{
                                    required: 'Slug is required!'
                                }}
                            />
                        </SlugWrapper>
                        <Controller
                            control={control}
                            name='photo'
                            defaultValue=''
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <UploadField
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    folder='actors'
                                    placeholder='Photo'
                                />
                            )}
                            rules={{
                                required: 'Photo is required!'
                            }}
                        />
                        <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
                            Update
                        </Button>
                    </ScrollView>}
            </View>
        </Layout>
    )
}

export default ActorEdit