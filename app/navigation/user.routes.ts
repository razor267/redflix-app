import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import { IRoute } from './navigation.types'
import { adminRoutes } from '@/navigation/admin.routes'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
]

export const routes = [...userRoutes, ...adminRoutes]
