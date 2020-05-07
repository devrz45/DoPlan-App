import React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {Icon as IconInterface} from 'react-native-vector-icons/Icon';

interface Dictionary<T> {
  [Key: string]: T;
}

const IconDictionary: Dictionary<any> = {
  Fontisto: FontistoIcon,
  Feather: FeatherIcon,
  Ion: IonIcon,
  Octicon: OcticonIcon,
  Ant: AntIcon,
};

interface Props {
  style: object;
  type: string;
  name: string;
}

const IconWrapper: React.FC<Props> = (props: Props) => {
  const Icon: any = IconDictionary[props.type];
  return (
    <Icon
      {...props}
      size={24}
      style={
        props.style ? {...styles.iconBase, ...props.style} : styles.iconBase
      }
    />
  );
};

let styles = StyleSheet.create({
  iconBase: {
    padding: '10%',
    color: '#62727b',
  },
});

export default IconWrapper;
