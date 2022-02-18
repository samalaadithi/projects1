import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
export default function SearchInput() {
  return (
     <View style={styles.view}>
      <View style={{paddingRight: 5.25, paddingLeft: 17.75}}>
        <Icons name="search1" size={18} color="rgba(50, 59, 80, 0.7)" />
      </View>
      <TextInput placeholder="search your funds" />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 41,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    elevation: 2,
  },
});
