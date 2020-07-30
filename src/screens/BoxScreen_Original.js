import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

const BoxScreen = () => {

    return (<View style={styles.viewStyle}>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStyle}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3 ,
        borderColor: 'black',
        //alignItems: 'flex-end'
        flexDirection: 'row',
        height: 200,
        //justifyContent: 'center'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //marginVertical: 20,
        //marginHorizontal: 20
        //margin: 20
        flex: 2
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        //alignSelf: 'stretch'
        //position: 'absolute',
        //fontSize: 18,
        //these properties below are the same as:
        /*top: 0,
        right: 0,
        bottom: 0,
        left: 0*/
        //...StyleSheet.absoluteFillObject
        top: 200,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        //alignSelf: 'flex-end'
    }
});

export default BoxScreen;