import {StatusBar} from 'expo-status-bar'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import AuthProvider from '@/providers/auth/AuthProvider'

import Navigation from '@/navigation/Navigation'
import Toast from '@/components/ui/Toast'
import React from 'react'

export default function App() {
    return (
        <>
            <AuthProvider>
                <SafeAreaProvider>
                    <Navigation/>
                </SafeAreaProvider>
            </AuthProvider>
            <StatusBar style='light'/>
            <Toast/>
        </>
    )
}
