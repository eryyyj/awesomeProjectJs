import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#e9a209ff',
  },
  goalText: {
    color: '#000000ff',
  },
});