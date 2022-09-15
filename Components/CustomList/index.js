import React from "react";
import { StyleSheet, FlatList} from "react-native";

const CustomList = ({ data, renderItem, keyExtractor}) => {
    return (
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '80%'
  }
})
export default CustomList;