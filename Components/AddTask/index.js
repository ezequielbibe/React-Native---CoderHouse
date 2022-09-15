import React from "react";
import { StyleSheet, View, TextInput, Button} from "react-native";

const AddTask = ({ value, onChangeText, placeholder, addTask, selectionColor, textButton, color }) => {
    return (

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          selectionColor={selectionColor}
          onChangeText={onChangeText}
          value={value}
        />
        <Button
            title={textButton}
            onPress={addTask} 
            color={color}
         />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      input: {
        width: '80%',
        borderBottomColor: '#549F93',
        borderBottomWidth: 1,
        height: 40,
        marginVertical: 20,
      }
})
export default AddTask;