import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'My Home' }}
            />
        </Stack.Navigator>
    )
}