import React, {FC} from 'react'
import {AdminHeader, AdminNavigation, AdminTable, Layout} from '@/components/ui'
import {useUsers} from './useUsers'

const UserList: FC = () => {
    const {control, data, isLoading, deleteAsync} = useUsers()

    return (
        <Layout isHasPadding>
            <AdminNavigation title='Users'/>
            <AdminHeader control={control}/>
            <AdminTable
                tableItems={data}
                isLoading={isLoading}
                headerItems={['Email', 'Date register']}
                removeHandled={deleteAsync}
            />
        </Layout>
    )
}

export default UserList