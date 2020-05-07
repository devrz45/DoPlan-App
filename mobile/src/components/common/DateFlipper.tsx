import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
var Sound = require('react-native-sound');

Sound.setCategory('Playback');
var click = new Sound('click.wav', Sound.MAIN_BUNDLE, () => {});
const dateData = [
  '12 feb',
  '13 feb',
  '14 feb',
  '15 feb',
  '16 feb',
  '17 feb',
  '18 feb',
  '19 feb',
  '20 feb',
];

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(10);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

interface Props {
  [Key: string]: any;
}

const DateFlipper: React.FC<Props> = (props: Props) => {
  return (
    <Carousel
      data={dateData}
      renderItem={({item}) => <DateSlide dateString={item} />}
      firstItem={4}
      enableMomentum={true}
      loop={true}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      layout={'default'}
      loopClonesPerSide={10}
      onSnapToItem={() => click.play()}
      contentContainerCustomStyle={{backgroundColor: 'blue'}}
      slideStyle={{backgroundColor: 'yellow'}}
      inactiveSlideScale={0.5}
      containerCustomStyle={{backgroundColor: 'green'}}
    />
  );
};

const DateSlide: React.FC<Props> = ({dateString}) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>{dateString}</Text>
    </View>
  );
};

export default DateFlipper;
