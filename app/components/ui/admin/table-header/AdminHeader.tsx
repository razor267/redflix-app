import React, {FC} from 'react'
import {View} from 'react-native'
import {Control} from 'react-hook-form'
import {ISearchFormData} from '@/components/screens/search/search.interface'
import {Field} from '@/components/ui'
import AdminCreteButton from '@/components/ui/admin/table-header/AdminCreteButton'

interface IAdminHeader {
    onPress?: () => void
    control: Control<ISearchFormData>
}

const AdminHeader: FC<IAdminHeader> = ({control, onPress}) => {
    return (
        <View className='flex-row items-center justify-between mb-3'>
            <View style={{width: onPress ? '82%' : '100%'}}>
                <Field<ISearchFormData>
                    control={control}
                    name='searchTerm'
                    placeholder='Type something...'
                    keyboardType='web-search'
                />
            </View>
            {onPress && <AdminCreteButton onPress={onPress}/>}
        </View>
    )
}

export default AdminHeader