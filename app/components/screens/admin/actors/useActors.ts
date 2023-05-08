import {useSearchForm} from '@/components/screens/search/useSearchForm'
import {useTypedNavigation} from '@/hooks/useTypedNavigation'
import {useMutation, useQuery} from '@tanstack/react-query'
import {ActorService} from '@/services/actor.service'
import Toast from 'react-native-toast-message'
import {useMemo} from 'react'
import {ITableItem} from '@/components/ui'

export const useActors = () => {
    const {control, debouncedSearch} = useSearchForm()
    const {navigate} = useTypedNavigation()

    const queryData = useQuery(
        ['search actors', debouncedSearch],
        () => ActorService.getAll(debouncedSearch),
        {
            select: data => data.map((actor): ITableItem => ({
                _id: actor._id,
                editNavigate: () => navigate('ActorEdit', {id: actor._id}),
                items: [
                    actor.name,
                    String(actor.countMovies)
                ]
            }))
        }
    )

    const {mutateAsync: createAsync} = useMutation(['create actor'], () => ActorService.create(), {
        onSuccess: async (_id) => {
            Toast.show({
                type: 'success',
                text1: 'Delete actor',
                text2: 'delete was successful'
            })

            navigate('ActorEdit', {
                id: _id
            })
        }
    })

    const {mutateAsync: deleteAsync} = useMutation(['delete actor'], (actorId: string) => ActorService.delete(actorId), {
        onSuccess: async () => {
            Toast.show({
                type: 'success',
                text1: 'Delete actor',
                text2: 'delete was successful'
            })

            await queryData.refetch()
        }
    })

    return useMemo(() => ({...queryData, control, deleteAsync, createAsync}), [queryData, deleteAsync, createAsync])
}