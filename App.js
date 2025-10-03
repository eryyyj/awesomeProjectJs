import { StyleSheet, View, Text, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [pendingDeleteKey, setPendingDeleteKey] = useState(null);


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => {
      const updatedGoals = [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ];
      if (updatedGoals.length > 5) {
        setWarningVisible(true);
      }
      return updatedGoals;
    });
  }

  function requestDeleteGoal(goalKey) {
    setPendingDeleteKey(goalKey);
  }

  function confirmDeleteGoal() {
    setCourseGoals(currentCourseGoals => {
      const updatedGoals = currentCourseGoals.filter(goal => goal.key !== pendingDeleteKey);
      if (updatedGoals.length <= 5) {
        setWarningVisible(false);
      }
      return updatedGoals;
    });
    setPendingDeleteKey(null);
  }

  function cancelDeleteGoal() {
    setPendingDeleteKey(null);
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals(currentCourseGoals => 
      currentCourseGoals.filter(goal => goal.key !== goalKey)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.navBar}>
        <Pressable onPress={() => setWelcomeVisible(true)}>
          <MaterialIcons name="person" size={32} color="#fff" style={styles.userIcon} />
        </Pressable>
        <Text style={styles.navTitle}>Goal List</Text>
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
  <GoalList courseGoals={courseGoals} onDeleteGoal={requestDeleteGoal} />
      {/* Welcome Modal */}
      <Modal
        visible={welcomeVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setWelcomeVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.welcomeModalContent}>
            <Text style={styles.welcomeText}>Welcome to the application!</Text>
            <Pressable style={styles.closeButton} onPress={() => setWelcomeVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Warning Modal for >5 goals */}
      <Modal
        visible={warningVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setWarningVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.welcomeModalContent}>
            <Text style={styles.welcomeText}>Warning: Too many goals! Don't overwhelm yourself with too much burden.</Text>
            <Pressable style={styles.closeButton} onPress={() => setWarningVisible(false)}>
              <Text style={styles.closeButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        visible={pendingDeleteKey !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelDeleteGoal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.welcomeModalContent}>
            <Text style={styles.welcomeText}>Are you sure you want to delete this goal?</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Pressable style={[styles.closeButton, { marginRight: 10, backgroundColor: '#e04a16ff' }]} onPress={confirmDeleteGoal}>
                <Text style={styles.closeButtonText}>Delete</Text>
              </Pressable>
              <Pressable style={styles.closeButton} onPress={cancelDeleteGoal}>
                <Text style={styles.closeButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  welcomeModalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  welcomeText: {
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
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#f0d18fff",
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0a016ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  userIcon: {
    marginRight: 10,
  },
  navTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
