import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import {IRoute} from './navigation.types'
import {adminRoutes} from '@/navigation/admin.routes'
import Profile from '@/components/screens/profile/Profile'
import Favorites from '@/components/screens/favorites/Favorites'
import Search from '@/components/screens/search/Search'
import Trending from '@/components/screens/trending/Trending'

export const userRoutes: IRoute[] = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Auth',
        component: Auth
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
    }
]

export const routes = [...userRoutes, ...adminRoutes]
