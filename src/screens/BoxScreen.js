import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

const BoxScreen = () => {

    return (<View style={styles.ParentStyle}>
                <View style={styles.ViewOneStyle} />
                <View style={styles.ViewTwoStyle} />
                <View style={styles.ViewThreeStyle} />
            </View>
    );
};

const styles = StyleSheet.create({
    ParentStyle: {
        //borderWidth: 3 ,
        //borderColor: 'black',
        //alignItems: 'flex-end'
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    ViewOneStyle: {
        //borderWidth: 3,
        //borderColor: 'red',
        //marginVertical: 20,
        //marginHorizontal: 20
        //margin: 20
        backgroundColor: 'red',
        height: 50,
        width: 50,
        //flex: 2
    },
    ViewTwoStyle: {
        //borderWidth: 3,
        //borderColor: 'red',
        //alignSelf: 'stretch'
        //position: 'absolute',
        //fontSize: 18,
        //these properties below are the same as:
        /*top: 0,
        right: 0,
        bottom: 0,
        left: 0*/
        //...StyleSheet.absoluteFillObject
        backgroundColor: 'green',
        height: 50,
        width: 50,
        marginTop: 50,
        //flex: 2,
    },
    ViewThreeStyle: {
        //borderWidth: 3,
        //borderColor: 'red',
        backgroundColor: 'purple',
        height: 50,
        width: 50,
        //flex: 2,
        //alignSelf: 'flex-end'
    }
});

export default BoxScreen;