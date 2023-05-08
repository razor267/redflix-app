import React, {FC} from 'react'
import {AdminNavigation, Layout} from '@/components/ui'

const UserList: FC = () => {
    return (
        <Layout isHasPadding>
            <AdminNavigation title='UserList'/>
        </Layout>
    )
}

export default UserList