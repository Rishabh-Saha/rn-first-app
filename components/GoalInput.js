import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Course Goal' 
                    style={styles.textContainer} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={()=> props.onCancel()}/>
                    </View>
                    <View style={styles.button}>{/*Because you cannot add styles to buttons */}
                    <Button 
                        title='Add' 
                        onPress={addGoalHandler}/>{/*Do not add paranthesis after addGoalHandler function call else it will immediately execute when the view is rendered, instead call it onChangeText */}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' },
    textContainer: { width: '80%', borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
    button: { width: '40%' }
});

export default GoalInput;