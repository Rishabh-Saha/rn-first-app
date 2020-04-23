import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalInput => {
    // setCourseGoals([...courseGoals, enteredGoal]); // Even this would work but there is no 100% guarantee that the snapshot in courseGoal is updated
    setCourseGoals(currentGoals => [
    ...currentGoals, 
    { id: Math.random().toString(), value: goalInput } //instead of id if you write key, you don't have to write keyExtractor property in Flatlist
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  };

  return (
    <View style={styles.screen}>
      <Button 
        title={"Add a new Goal"} 
        onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={() => setIsAddMode(false)}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
          id={itemData.item.id}
          title={itemData.item.value}
          onDelete={removeGoalHandler} />
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});