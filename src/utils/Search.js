import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";

const Search = () => {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);

  return (
    <View style={styles.searchWrap}>
      <Input
        placeholder="Search for items"
        leftIcon={{ type: "feather", name: "search", color: "#ccc" }}
        containerStyle={styles.containerWrap}
        onChangeText={onChangeText}
        inputContainerStyle={styles.input}
        inputStyle={{ fontSize: 14 }}
      />
      <View style={styles.iconWrap}>
        <Icon
          name={"swap-horiz"}
          type={"materialIcons"}
          color={"#fff"}
          size={30}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerWrap: {
    height: 50,
    flex: 1,
    backgroundColor: "#cccccc38",
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 0,
  },
  iconWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: "#476266",
  },
});
