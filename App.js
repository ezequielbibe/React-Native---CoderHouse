import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { AddTask, CustomList, CustomModal } from './Components/index';

export default function App() {

  const [ task, setTask ] = useState('');
  const [ tasks, setTasks ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ selectedTask, setSelectedTask ] = useState(null);

  const onHandleChangeText = (text) => {
    setTask(text);
  }
  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
    console.log(tasks)
  }
  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id === id))
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text >{item.value}</Text>
      <TouchableOpacity  onPress={() => onHandleModal(item.id)}>
        <Text style={styles.x}>X</Text>
      </TouchableOpacity>
    </View>
  )

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de compras</Text>

      <AddTask 
        placeholder='ingrese el producto aqui'
        selectionColor='#64B6AC'
        onChangeText={onHandleChangeText}
        value={task}
        textButton='Agregar'
        addTask={addTask}
        color='#5D737E'
      />

      <CustomList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalTitle}>
          <Text style={styles.title}>Detalle de lista</Text>
        </View>
        <View style={styles.textModal}>
          <Text style={styles.textModal}>¿Estas seguro que deseas eliminar este elemento?</Text>
        </View>
        <View style={styles.itemModalContainer}>
          <Text style={styles.itemModal}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button 
            title='Eliminar'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#5D737E'
          />
          <Button 
            title='Cancelar'
            onPress={()=> setModalVisible(!modalVisible)}
            color='#5D737E'
          />
        </View>
      </CustomModal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#549F93'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#549F93',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,

  },
  x:{
    color: '#ffcccc',
    fontWeight: 'bold'
  },
  modalTitle: {
    alignItems: 'center',
    marginVertical: 10,
  },
  textModal: {
    alignItems: 'center',
    marginVertical: 5,
  },
  itemModalContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  itemModal: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  }
});
