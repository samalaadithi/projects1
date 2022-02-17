import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  useState,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const slider_width = Dimensions.get('window').width + 80;
const item_width = Math.round(slider_width * 0.8);
import FamilyCard from '../components/FamilyCard';

const Circle = ({imgPath, index, onPressCircle, isSelected}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
      <TouchableOpacity
        onPress={() => {
          onPressCircle(index);
        }}>
        <Image
          style={[
            styles.img,
            {
              borderColor: isSelected ? '#2FDF84' : null,
              width: isSelected ? 32 : 24,
              height: isSelected ? 32 : 24,
              opacity: isSelected ? 1 : 0.7,
            },
          ]}
          source={imgPath}
        />
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const [cuurentIndex, setIndex] = React.useState(0);
  const [values, setValues] = React.useState('0');
  let isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        ref={c => {
          isCarousel = c;
        }}
        data={array}
        renderItem={({item}) => (
          <FamilyCard
            currentValue={item.currentValue}
            date={item.date}
            investedAmt={item.investedAmt}
            unrealisedAmt={item.unrealisedPLAmt}
            returnPercentage={item.returnPercentage}
          />
        )}
        sliderWidth={slider_width}
        itemWidth={item_width}
        onBeforeSnapToItem={cuurentIndex => setIndex(cuurentIndex)}
        useScrollView={true}
        alignSelf="center"
      />
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 2}}>
        {array.map((item, index) => (
          <Circle
            imgPath={item.imgPath}
            index={index}
            onPressCircle={circleIndex => {
              isCarousel.snapToItem(circleIndex);
            }}
            isSelected={index === cuurentIndex}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 50,
    borderWidth: 2,
    marginRight: 21,
    //alignItems: 'center',
  },
});
export default List;
const array = [
  {
    imgPath: require('../assests/img3.jpg'),
    currentValue: '2.98',
    date: '10-May-2020',
    investedAmt: '1.12',
    unrealisedPLAmt: '2.32',
    returnPercentage: '2.34',
  },
  {
    imgPath: require('../assests/img2.jpg'),
    currentValue: '3.78',
    date: '10-June-2019',
    investedAmt: '1.75',
    unrealisedPLAmt: '1.23',
    returnPercentage: '12.3',
  },
  {
    imgPath: require('../assests/img1.jpg'),
    currentValue: '1.23',
    date: '15-Dec-2020',
    investedAmt: '1.12',
    unrealisedPLAmt: '2.32',
    returnPercentage: '2.34',
  },
  {
    imgPath: require('../assests/img4.jpg'),
    currentValue: '3.54',
    date: '29-May-2018',
    investedAmt: '1.54',
    unrealisedPLAmt: '4.32',
    returnPercentage: '23.4',
  },
  {
    imgPath: require('../assests/img5.jpg'),
    currentValue: '5.66',
    date: '10-Feb-2021',
    investedAmt: '1.12',
    unrealisedPLAmt: '2.32',
    returnPercentage: '2.34',
  },
];
