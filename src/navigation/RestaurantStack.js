import { createStackNavigator } from "@react-navigation/stack";
import { screen } from "../utils/screenNames"
import RestaurantScreen from "../screens/Restaurant/RestaurantScreen";
import { Icon } from "@rneui/base";

const Stack=createStackNavigator();

const RestaurantStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.restaurant.restaurants}
            component={RestaurantScreen}
            options={{title:"Productos"}}
            />
        </Stack.Navigator>
    )
}

export default RestaurantStack;