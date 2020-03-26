import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddButton from './components/AddButton';
import JournalScreen from './screens/Journal';
import MessageScreen from './screens/Message';
import TreatmentScreen from './screens/Treatment';
import ProfileScreen from './screens/Profile';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Bottom = () => {
  return(
    <NavigationContainer>
      <BottomTab.Navigator
         tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor:'#cdccce',
          showLabel:false
          
        }}
      >
        <BottomTab.Screen 
          name="Journal"
          component={JournalScreen}
          options={{
            tabBarIcon: ({focused}) => <FontAwesome5 name="book-medical" size={24} color={ focused ? 'tomato' :'#cdccce'} />
          }}
        />
        <BottomTab.Screen 
            name="Measure"
            component={MessageScreen}
            options={{
              tabBarIcon:({focused}) => <FontAwesome5 name="heartbeat"  size={24} color={ focused ? "tomato" :"#cdccce"} />
            }}
        />
        <BottomTab.Screen 
           name="btn"
           children={() => null}
            options={{
              tabBarIcon: () => <AddButton />
            }}
            

        />
        <BottomTab.Screen 
            name="Treatment"
            component={TreatmentScreen}
            options={{
              tabBarIcon:({focused}) => <FontAwesome5 name="band-aid" size={24} color={focused ? "tomato" : "#cdccce"} />
            }}
        />
        <BottomTab.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon:({focused}) => <FontAwesome5 name="user" size={24} color={focused ? "tomato" : "#cdccce"} />
            }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Bottom;