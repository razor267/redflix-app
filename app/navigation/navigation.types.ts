import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Screen404: undefined
	Profile: undefined
	Favorites: undefined
	Trending: undefined
	Search: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
	Actor: {
		slug: string
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
