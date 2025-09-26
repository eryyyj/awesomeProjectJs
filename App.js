import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals(currentCourseGoals => 
      currentCourseGoals.filter(goal => goal.key !== goalKey)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalList courseGoals={courseGoals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#f0d18fff",
  },
});
