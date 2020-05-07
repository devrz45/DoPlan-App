import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import SearchBar from '../../common/SearchBar';
import DateFlipper from '../../common/DateFlipper';
interface Props {}

const DailyScreen: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView style={styles.daily_container}>
      <SearchBar />
      <DateFlipper />
      <View style={styles.task_container}>
        <Text>This is the task area</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  daily_container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  task_container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default DailyScreen;
