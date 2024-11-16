import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './Home'
import Detail from './Detail'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}options={{headerShown:false}} />
                <Stack.Screen name='Detail'component={Detail} options={{headerRight:()=>(
                    <TouchableOpacity>
                        <Feather
                        name="shopping-cart"
                        size={24}
                        color="Black"
                        />

                    </TouchableOpacity>
                )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}