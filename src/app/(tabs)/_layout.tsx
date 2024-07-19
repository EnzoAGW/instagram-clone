import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'pink', tabBarShowLabel: false}}>
            <Tabs.Screen name="index" options={{
                headerTitle: 'For you',
                tabBarIcon: ({ color }) => <FontAwesome name='home' size={30} color={color} />
            }} />
            <Tabs.Screen name="news" options={{
                headerTitle: 'Create post',
                tabBarIcon: ({ color }) => <FontAwesome name='plus-square-o' size={30} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                headerTitle: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome name='user' size={30} color={color} />
            }} />
        </Tabs>)
}