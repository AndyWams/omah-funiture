import { StyleSheet, Dimensions } from "react-native";
const getWidth = Dimensions.get("screen").width;
export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  mh15: {
    marginHorizontal: 15,
  },
  headerSectionWrap: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  headerSectionLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imgAvatr: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  white: {
    color: "#fff",
  },
  smTextWrap: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  smallTxt: {
    fontSize: 14,
  },
  split: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mediumTxt: {
    fontSize: 18,
  },
  largeTxt: {
    fontSize: 22,
  },
  notifWrap: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  herobanner: {
    height: 150,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#2a4043",
  },
  heroimg: {
    position: "absolute",
    right: 5,
    bottom: 15,
    width: 200,
    height: 250,
  },
  mainText: {
    fontSize: 18,
  },
  favoriteWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    backgroundColor: "pink",
    borderRadius: 10,
    marginBottom: 12,
  },
  scrollCards: {
    flex: 1,
    justifyContent: "center",
    width: getWidth / 1.5,
    height: 200,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(204, 204, 204, 0.3)",
    margin: 10,
  },
});
