import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
const Details = ({ route, navigation }) => {
  //   const itemId = route.params.itemId;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#77838a" />
      <ProductImage />
      <ProductDetails />
    </SafeAreaView>
  );
};

const ProductImage = () => {
  return (
    <View>
      <Image
        source={require("../assets/office.png")}
        style={styles.productImage}
        resizeMode="cover"
      />
    </View>
  );
};
const ProductDetails = () => {
  return (
    <View style={{ position: "relative" }}>
      <StackCard bgcolor={"#869096"} top={-30} />
      <StackCard bgcolor={"#979ea4"} top={-14} />
      <View style={styles.detailsWrap}>
        <View>
          <ProductHeaderDetail />
        </View>
        <View>
          <Text style={styles.subtitle}>IKAE</Text>
        </View>
        <View style={{ marginVertical: 8, flexDirection: "row" }}>
          <ColoredCircle bgcolor="#f73926" />
          <ColoredCircle bgcolor="#4e4e4e" />
          <ColoredCircle bgcolor="#ffc344" />
          <ColoredCircle bgcolor="#665e95" />
        </View>
        <View>
          <Text style={[styles.description, { marginVertical: 10 }]}>
            Made from wooden legs and curved shape, makes this chair looks
            simple and elegant chairs always work in every situation and places
            like the loune, dining room, and even office.
          </Text>
        </View>
        <ActionContainer />
      </View>
    </View>
  );
};
const ProductHeaderDetail = () => {
  return (
    <View style={styles.split}>
      <Text style={styles.title}>Sabeb Chair</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="star" type={"font-awesome"} size={18} color={"gold"} />
        <Text style={{ marginLeft: 10 }}>4.5</Text>
      </View>
    </View>
  );
};
const ColoredCircle = ({ bgcolor }) => {
  return (
    <View
      style={{
        backgroundColor: bgcolor,
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 10,
      }}
    />
  );
};
const ActionContainer = () => {
  return (
    <View style={[styles.split]}>
      <View style={styles.cartContainer}>
        <Icon name={"shopping-cart"} type={"feather"} color={"#374d50"} />
      </View>
      <View style={styles.button}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "black" : "#3e575a",
              width: "100%",
            },
          ]}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Buy $100</Text>
        </Pressable>
      </View>
    </View>
  );
};

const StackCard = ({ bgcolor, top }) => {
  return (
    <View
      style={{
        width: "90%",
        height: 100,
        backgroundColor: bgcolor,
        borderRadius: 20,
        zIndex: 0,
        position: "absolute",
        top: top,
      }}
    />
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77838a",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },

  productImage: {
    width: 230,
    height: 230,
    backgroundColor: "#7e898f",
    borderRadius: 100,
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
  detailsWrap: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 30,
    width: "90%",
    height: 300,
    position: "relative",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  split: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    color: "#c2c2c2",
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: "#c2c2c2",
  },
  cartContainer: {
    backgroundColor: "#eff0f0",
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 20,
  },
  button: {
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
