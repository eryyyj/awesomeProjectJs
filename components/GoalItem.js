import { View, Text, StyleSheet, Pressable } from 'react-native';
<<<<<<< HEAD
=======
import { MaterialIcons } from '@expo/vector-icons';
>>>>>>> 2ce8f57 (added modals to my goals app)

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
<<<<<<< HEAD
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
=======
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable onPress={props.onDelete} style={styles.deleteButton}>
        <MaterialIcons name="delete" size={20} color="#fff" />
>>>>>>> 2ce8f57 (added modals to my goals app)
      </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#000000ff',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e04a16ff',
    borderRadius: 4,
    padding: 4,
    marginLeft: 10,
  },
});
