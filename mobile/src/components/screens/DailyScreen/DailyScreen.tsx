import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const DailyScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.daily_container}>
      <Text>This is a daily screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  daily_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DailyScreen;
