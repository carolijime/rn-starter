import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (counter, action) => {
    // counter === { count: number };
    // action === { type: 'increase' || 'decrease', payload: +1 || -1 };

    switch (action.type) {
        case 'increment':
            return { ...counter, count: counter.count + action.payload };
        case 'decrement':
            return { ...counter, count: counter.count - action.payload };
        default:
            return counter;
    };
};

const COLOR_INCREMENT = 1;

const CounterScreen = () => {
    //Don't do this
    //let counter = 0;

    const [counter, dispatch] = useReducer(reducer, {count: 0});
    const { count } = counter;


    //const [counter, setCounter] = useState(0);

    return (<View>
                <Button title="Increase" onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
                }} />
                <Button title="Decrease" onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }} />
                <Text>Current Count: {count}</Text>
            </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;