import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Daily from '../../screens/DailyScreen/DailyScreen';

const Stack = createStackNavigator();

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Daily">
      <Stack.Screen name="Daily" component={Daily} />
    </Stack.Navigator>
  );
};

export default index;
