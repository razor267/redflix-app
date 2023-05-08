import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {FC} from 'react'

import Auth from '@/components/screens/auth/Auth'
import Screen404 from '@/components/screens/system/Screen404'

import {useAuth} from '@/hooks/useAuth'

import {TypeRootStackParamList} from './navigation.types'
import {routes, userRoutes} from './user.routes'

const PrivateNavigator: FC = () => {
    const {user} = useAuth()

    const Stack = createNativeStackNavigator<TypeRootStackParamList>()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#090909'
                }
            }}
        >
            {user
                ? user?.isAdmin
                    ? routes.map(route => <Stack.Screen key={route.name} {...route} />)
                    : userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
                : <Stack.Screen name='Auth' component={Auth}/>}
        </Stack.Navigator>
    )
}

export default PrivateNavigator
