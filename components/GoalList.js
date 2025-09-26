import { StyleSheet, View, FlatList, Text } from 'react-native';
import GoalItem from './GoalItem';

function GoalList(props) {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.listStyle}>List of Goals</Text>
      <FlatList
        data={props.courseGoals}
        renderItem={(itemData) => (
          <GoalItem text={itemData.item.text} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
  },
  listStyle: {
    fontStyle: 'normal',
    backgroundColor: '#e0a016ff',
    borderBottomWidth: 1,
    borderRadius: 6,
    padding: 5,
    fontSize: 30,
    textAlign: 'center',
  },
});