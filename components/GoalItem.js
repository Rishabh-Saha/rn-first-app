import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    //Checkout Touchable components available on react-native docs
    return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItems}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItems: { padding:10, marginVertical: 5, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1}
});
export default GoalItem;