import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
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
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#000000ff',
  },
});
