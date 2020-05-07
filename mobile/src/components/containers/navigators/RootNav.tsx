import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Daily from '../../screens/DailyScreen/DailyScreen';

const Stack = createStackNavigator();

interface Props {}

const RootNav: React.FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Daily" headerMode="none">
      <Stack.Screen name="Daily" component={Daily} />
    </Stack.Navigator>
  );
};

export default RootNav;
