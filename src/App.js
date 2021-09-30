import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Keyboard, TextInput, Text, FlatList, TouchableHighlight } from 'react-native';
import Card from './components/Card'

const App = () => {
  const [list, setList] = useState(['abcd', 'efgh', 'jklm']);
  const [inputText, setInputText] = useState('');
  const [cardCount, setCardCount] = useState(list.length);

  const renderCard = (item) => {
    return(
      <Card task={item.item} id={item.index} deleteFunction={deleteCard} handleCount={setCardCount}/>
    );
  }
  const addCard = () => {
    if (inputText.trim()) {
      setList([...list, inputText]);
      setCardCount(cardCount + 1);
    } else {
      alert("Can't save empty event")
    }
    setInputText('');
    Keyboard.dismiss();
  }
  const deleteCard = (targetIndex) => {
    setList(list.filter((element, index)=> index !== targetIndex));
    setCardCount(cardCount - 1);
  }
  const changeInputText = (text) => {
    setInputText(text);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.todo_text}>TO-DO</Text>
        <Text style={styles.taskNumber_text}>{cardCount}</Text>
      </View>
      <FlatList 
        data={list} renderItem={renderCard}
      />
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder='to-do' placeholderTextColor='#7e7f7f' onChangeText={changeInputText} value={inputText}/>
        <TouchableHighlight style={styles.input_button_container} onPress={addCard}>
          <View style={[styles.input_button, {backgroundColor: inputText.trim() ? '#ffa500' : '#808080'}]}>
            <Text style={styles.input_button_text}>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  todo_text: {
    color: '#ffa500',
    fontSize: 50,
    fontWeight: 'bold'
  },
  taskNumber_text: {
    color: '#ffa500',
    fontSize: 50
  },
  input_container: {
    margin: 10,
    marginBottom: 20,
    backgroundColor: '#37474f',
    borderRadius: 12
  },
  input: {
    borderBottomColor: '#768e9a',
    borderBottomWidth: 1,
    margin: 10,
    padding: 2,
    color: '#f4f7f1'
  },
  input_button_container: {
    marginBottom: 20,
    marginTop: 2,
    margin: 10,
    borderRadius: 8
  },
  input_button: {
    padding: 5,
    alignItems: 'center',
    fontSize: 18,
    borderRadius: 8
  },
  input_button_text: {
    color: '#f4f7f1',
    fontSize: 18
  }
});

export default App;