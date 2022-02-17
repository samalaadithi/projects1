import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const FamilyCard = ({
  currentValue,
  date,
  investedAmt,
  unrealisedPLAmt,
  returnPercentage,
}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.blackView}>
        <View style={{paddingLeft: 31, paddingTop: 24}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.txt3, {fontSize: 24}]}>{currentValue}</Text>
            <Text style={[styles.txt3, {fontSize: 14, paddingTop: 10}]}>
              Cr.
            </Text>
          </View>
          <Text style={[styles.txt3, {fontSize: 10, opacity: 0.5, margin: 4}]}>
            Current value
          </Text>
        </View>
        <View style={{paddingTop: 27, paddingRight: 30}}>
          <Text style={[styles.txt3, {fontSize: 10}]}>{date}</Text>
        </View>
      </View>
      <View style={styles.whiteView}>
        <View>
          <Text style={styles.txt1}>{investedAmt} Cr.</Text>
          <Text style={styles.txt2}>Invested</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}>{unrealisedPLAmt} Cr.</Text>
          <Text style={styles.txt2}>Unrealised P/L</Text>
        </View>
        <View>
          <Text style={styles.txt1}>{returnPercentage}%</Text>
          <Text style={styles.txt2}>Returns</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txt1: {
    color: '#273149',
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 2,
  },
  txt2: {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: 10,
    fontWeight: 'normal',
  },
  blackView: {
    width: 328,
    height: 109,
    borderRadius: 10,
    backgroundColor: '#273149',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteView: {
    width: 296,
    height: 45,
    position: 'absolute',
    marginLeft: 26,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginTop: 96,
    justifyContent: 'space-between',
    paddingTop: 9,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15.5,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  txt3: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  mainView: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});
export default FamilyCard;
