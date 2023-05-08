import React, {FC} from 'react'
import {Pressable, Text} from 'react-native'
import {INavItem} from '@/components/ui/admin/navigation/admin-navigation.interface'
import {useTypedNavigation} from '@/hooks/useTypedNavigation'
import {useTypedRoute} from '@/hooks/useTypedRoute'
import cn from 'clsx'
import {MaterialIcons} from '@expo/vector-icons'

const AdminNavItem: FC<{ item: INavItem }> = ({item: {routeName, title, icon}}) => {
    const {navigate} = useTypedNavigation()
    const {name} = useTypedRoute()

    return (
        <Pressable
            className='flex-row items-center mb-1'
            // @ts-ignore
            onPress={() => navigate(routeName)}
        >
            <MaterialIcons
                name={icon}
                size={18}
                color={name === routeName ? '#D73033' : '#666'}
            />
            <Text
                className={cn('text-xl text-[#D1D1D1] ml-2', {
                    'text-[#D73033] font-medium': name === routeName
                })}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AdminNavItem