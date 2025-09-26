import { View, TextInput, Button, StyleSheet, Pressable,Text} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your Course Goal'
        onChangeText={goalInputHandler}
        value = {enteredGoalText}
      />
      <View style={styles.buttonsContainer}>
        <Button
        title='Add Goal'
        onPress={addGoalHandler}
        color = '#f7a50dff'
        />
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#f7a50da4' : '#f7a50dff',
              padding: 13,
              marginTop:10,
              
            },
          ]}
          >
          {({pressed}) => (
            <Text style={styles.pressableText}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  buttonsContainer:{
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#946809ff',
    width: '70%',
    padding: 13,
  },
  pressableText:{
    color:'#ffffffff'
  }
});