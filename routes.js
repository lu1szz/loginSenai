import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Dentro from './pages/logado';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ headerShown: false }}
                name="index"
                component={Bem_Vindo}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="entrada"
                component={Acesso}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="logado"
                component={Dentro}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="cadastro"
                component={Cadastro}
            />
        </Stack.Navigator>
    )
} 