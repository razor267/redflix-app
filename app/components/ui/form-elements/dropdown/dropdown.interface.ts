import { ItemType } from "react-native-dropdown-picker";
import {ControllerRenderProps, FieldError} from 'react-hook-form'
import {ViewStyle} from 'react-native'

export interface IDropdown {
    options?: ItemType<any>[]
    isMulti?: boolean
    field: ControllerRenderProps<any, any>
    isLoading?: boolean
    error?: FieldError
    style?: ViewStyle
}