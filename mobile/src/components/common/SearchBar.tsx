import React, {useContext} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from '../containers/wrappers/IconWrapper';
// import {SearchContext} from '../utils/searchContext';

interface Props {}

const SearchBar: React.FC<Props> = () => {
  //   let {search, setSearch} = useContext(SearchContext);
  return (
    <View style={styles.container}>
      <Icon type="Octicon" name="search" style={styles.searchIcon} />
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Search"
        style={styles.searchInput}
        // value={search}
        // onChangeText={(text: string) => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    marginHorizontal: 17,
    marginTop: 2,
    marginBottom: 10,
    height: 50,
  },
  searchIcon: {
    paddingLeft: '4%',
    paddingRight: '1%',
    paddingVertical: '1%',
  },
  searchInput: {
    flex: 1,
    height: 'auto',
    marginVertical: '0.5%',
    marginHorizontal: '2%',
    padding: 5,
    fontSize: 18,
  },
});

export default SearchBar;
