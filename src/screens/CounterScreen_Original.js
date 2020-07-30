import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    //Don't do this
    //let counter = 0;

    const [counter, setCounter] = useState(0);

    return (<View>
                <Button title="Increase" onPress={() => {
                    //Don't do this
                    //counter++;
                    setCounter(counter + 1);
                }} />
                <Button title="Decrease" onPress={() => {
                    //Don't do this
                    //counter--;
                    setCounter(counter - 1);
                }} />
                <Text>Current Count: {counter}</Text>
            </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;