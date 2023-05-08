import {useSearchForm} from '@/components/screens/search/useSearchForm'
import {useTypedNavigation} from '@/hooks/useTypedNavigation'
import {useMutation, useQuery} from '@tanstack/react-query'
import {GenreService} from '@/services/genre.service'
import Toast from 'react-native-toast-message'
import {useMemo} from 'react'
import {ITableItem} from '@/components/ui'

export const useGenres = () => {
    const {control, debouncedSearch} = useSearchForm()
    const {navigate} = useTypedNavigation()

    const queryData = useQuery(
        ['search genres', debouncedSearch],
        () => GenreService.getAll(debouncedSearch),
        {
            select: data => data.map((genre): ITableItem => ({
                _id: genre._id,
                editNavigate: () => navigate('GenreEdit', {id: genre._id}),
                items: [
                    genre.name,
                    genre.slug
                ]
            }))
        }
    )

    const {mutateAsync: createAsync} = useMutation(['create genre'], () => GenreService.create(), {
        onSuccess: async (_id) => {
            Toast.show({
                type: 'success',
                text1: 'Delete genre',
                text2: 'delete was successful'
            })

            navigate('GenreEdit', {
                id: _id
            })
        }
    })

    const {mutateAsync: deleteAsync} = useMutation(['delete genre'], (genreId: string) => GenreService.delete(genreId), {
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'Delete genre',
                text2: 'delete was successful'
            })

            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync, createAsync}), [queryData, deleteAsync, createAsync])
}