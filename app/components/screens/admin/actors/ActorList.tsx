import React, {FC} from 'react'
import {AdminHeader, AdminNavigation, AdminTable, Layout} from '@/components/ui'
import {useActors} from './useActors'

const ActorList: FC = () => {
    const {control, data, isLoading, deleteAsync, createAsync} = useActors()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Actors'/>
            <AdminHeader control={control} onPress={createAsync}/>
            <AdminTable
                tableItems={data}
                isLoading={isLoading}
                headerItems={['Name', 'Count movies']}
                removeHandled={deleteAsync}
            />
        </Layout>
    )
}

export default ActorList