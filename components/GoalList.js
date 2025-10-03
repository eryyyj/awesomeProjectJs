import { StyleSheet, View, FlatList, Text } from 'react-native';
import GoalItem from './GoalItem';

function GoalList(props) {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.listStyle}>List of Goals</Text>
      <FlatList
        data={props.courseGoals}
        renderItem={(itemData) => (
<<<<<<< HEAD
          <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.key}
            onDeleteItem={props.onDeleteGoal}
          />
=======
          <GoalItem text={itemData.item.text} onDelete={() => props.onDeleteGoal(itemData.item.key)} />
>>>>>>> 2ce8f57 (added modals to my goals app)
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
<<<<<<< HEAD
});
=======
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e0a016ff',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#e0a016ff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
>>>>>>> 2ce8f57 (added modals to my goals app)
