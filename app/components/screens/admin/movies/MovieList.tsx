import React, {FC} from 'react'
import {AdminHeader, AdminNavigation, AdminTable, Layout} from '@/components/ui'
import {useMovies} from './useMovies'

const MovieList: FC = () => {
    const {control, data, isLoading, deleteAsync, createAsync} = useMovies()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Movies'/>
            <AdminHeader control={control} onPress={createAsync}/>
            <AdminTable
                tableItems={data}
                isLoading={isLoading}
                headerItems={['Title', 'Main genre', 'Rating']}
                removeHandled={deleteAsync}
            />
        </Layout>
    )
}

export default MovieList