import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";

export default App = () => {
  const [textTask, setTextTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (textTask.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      title: textTask
    }
    setTasks([...tasks, newTask]);
    setTextTask("");
    Keyboard.dismiss();
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const renderTask = ({ item }) => {
    return (
      <View>
        <View style={styles.itemCard}>
          <Text style={styles.text}>{item.title}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteTask(item.id)}>
            <FontAwesomeIcon icon={faXmark} color="white" size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a task</Text>
      <View style={styles.contentWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Add tasks"
          value={textTask}
          onChangeText={setTextTask}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <FontAwesomeIcon icon={faPlus} color= 'white' size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>My To Do List</Text>
      <FlatList
        style={styles.listItems}
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#0a0a5c",
    alignItems: 'center',
    justifyContent: 'center',

  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    maxHeight: 50,
    maxWidth: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    maxWidth: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  listItems: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121254',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  addButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 2,
    borderRadius: 5,
    backgroundColor: '#008000',
  },
  deleteButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  }
});