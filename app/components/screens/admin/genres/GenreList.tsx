import React, {FC} from 'react'
import {AdminHeader, AdminNavigation, AdminTable, Layout} from '@/components/ui'
import {useGenres} from './useGenres'

const GenreList: FC = () => {
    const {control, data, isLoading, deleteAsync, createAsync} = useGenres()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Genres'/>
            <AdminHeader control={control} onPress={createAsync}/>
            <AdminTable
                tableItems={data}
                isLoading={isLoading}
                headerItems={['Name', 'Slug']}
                removeHandled={deleteAsync}
            />
        </Layout>
    )
}

export default GenreList