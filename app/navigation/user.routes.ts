import Favorites from '@/components/screens/favorites/Favorites'
import Genre from '@/components/screens/genre/Genre'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Trending from '@/components/screens/trending/Trending'

import { IRoute } from './navigation.types'
import { adminRoutes } from '@/navigation/admin.routes'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Genre',
		component: Genre
	}
]

export const routes = [...userRoutes, ...adminRoutes]
