import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../../constants';

const { COLORS, SIZES } = theme;

const CourseItem = ({item}) => {

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={item.image} style={{ width: 50, height: 50 }} resizeMode='contain'/>
        </View>
        <View style={styles.courseContainer}>
            <Text style={{fontSize: SIZES.body3, fontWeight: 'bold', color: COLORS.blue}}>{item.title}</Text>
            <Text style={{ color: COLORS.salmon}}>{item.hours} hours, {item.lessons} lessons</Text>
        </View>
        <View style={styles.extraInfoContainer}>
            <Text>25%</Text>
        </View>
        <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="play-outline" size={20} color={COLORS.salmon} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
       backgroundColor: COLORS.salmon2,
       padding: 10,
       marginBottom: 5,
       borderRadius: 15,
       flexDirection: 'row',
       alignItems: 'center',
   },
   logoContainer: {
        flex: 1
   },
   courseContainer: {
        flex: 3,
        flexDirection: 'column',
        marginStart: 10
   },
   extraInfoContainer: {
        flex: 1
   },
   iconContainer: {
        flex: 1
   },
})
export default CourseItem;
