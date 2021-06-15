import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { CourseItem } from '../../components';

import { theme, images } from '../../constants';
const { course1, course2, course3, course4, course5 } = images;
const { COLORS, SIZES } = theme;

const courses = [
    {
        key: '1',
        title: 'Adobe XD Prototyping',
        hours: 10,
        lessons: 19,
        image: course1
    },
    {
        key: '2',
        title: 'Sketch shortcuts and tricks',
        hours: 10,
        lessons: 19,
        image: course5
    },
    {
        key: '3',
        title: 'UI Motion design in After Effects 2021',
        hours: 10,
        lessons: 19,
        image: course2
    },
    {
        key: '4',
        title: 'Graphic design with adobe photoshop',
        hours: 10,
        lessons: 19,
        image: course3
    },
    {
        key: '5',
        title: 'Figma prototyping',
        hours: 10,
        lessons: 19,
        image: course4
    }
]
const Home = () => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Welcome back John Doe</Text>
            <View style={styles.searchInput}>
                <TextInput style={styles.input} placeholder="Search for new knowledge" />
                <Icon style={styles.searchIcon} name="search" size={20} color={COLORS.gray} />
            </View>
        </View>
        <View style={styles.content}>
            <Text style={styles.contentTitle}>Courses in progress</Text>
            <FlatList 
                data={courses}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CourseItem item={item} />
                )}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    // Containers 
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    header: {
        backgroundColor: COLORS.salmon,
        height: '40%',
        width: '100%',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        padding: 15,
        zIndex: 10000
    },
    content: {
        backgroundColor: COLORS.white,
        height: '60%',
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 15
    },
    searchInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    list: {
        marginTop: 15
    },
    // Texts
    headerTitle: {
        fontSize: SIZES.h1,
        color: COLORS.white,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom:10,
        width: '60%'
    },
    contentTitle: {
        fontSize: SIZES.h1,
        color: COLORS.blue
    },

    // Inputs
    input: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingStart: 10,
        paddingEnd: 40,
        width: '100%'
    },
    searchIcon: {
        position: 'absolute',
        right: 10
    }
})
export default Home;
