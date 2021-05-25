import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  StatusBar,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Icon, Image } from "react-native-elements";
import Search from "../utils/Search";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Data } from "../utils/data";
import styles from "../utils/Style";

const ProfileAvatar = () => {
  return (
    <View style={styles.headerSectionLeft}>
      <View>
        <ImageBackground
          source={require("../assets/about-img.png")}
          style={styles.imgAvatr}
          imageStyle={{ borderRadius: 10 }}
        ></ImageBackground>
      </View>
      <View style={styles.smTextWrap}>
        <Text style={[styles.smallTxt, { color: "#ccc" }]}>Hello</Text>
        <Text style={styles.mediumTxt}>Drew</Text>
      </View>
    </View>
  );
};
const NotificationBell = () => {
  return (
    <View>
      <TouchableOpacity style={styles.notifWrap}>
        <Icon
          name={"bell"}
          type={"font-awesome-5"}
          size={25}
          color={"#476266"}
        />
      </TouchableOpacity>
    </View>
  );
};
const HeroBanner = () => {
  return (
    <View style={[styles.herobanner, styles.mh15]}>
      <BannerText />
      <ImageBackground
        source={require("../assets/office.png")}
        style={styles.heroimg}
      />
    </View>
  );
};
const BannerText = () => {
  return (
    <View>
      <Text style={[styles.largeTxt, styles.white]}>Black Friday</Text>
      <Text style={[styles.smallTxt, { color: "#ccc" }]}>
        20% off for all item
      </Text>
    </View>
  );
};
const TitleHeaderBar = ({ title, actionTxt }) => {
  return (
    <View style={[styles.split, styles.mh15, { marginVertical: 20 }]}>
      <Text style={[styles.mainText, { color: "#2a4043" }]}>{title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={[styles.smallTxt, { color: "#2a4043" }]}>{actionTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Favorite = () => {
  const [like, setLike] = useState(true);
  const togleFavorite = () => {
    if (like) {
      setLike(!like);
    } else {
      setLike(!like);
    }
  };
  return (
    <Pressable onPress={togleFavorite} style={styles.favoriteWrap}>
      <View>
        <Icon
          name={like ? "heart-alt" : "heart"}
          type={"fontisto"}
          size={18}
          color={like ? "#000" : "#fff"}
        />
      </View>
    </Pressable>
  );
};

const ScrollableCards = () => {
  const navigation = useNavigation();
  const Item = ({ title, psubTitle, subTitle }) => (
    <View style={[styles.scrollCards]}>
      <Favorite />
      <Text
        style={[styles.mediumTxt, { fontWeight: "bold", color: "#2a4043" }]}
      >
        {title}
      </Text>
      <Text style={[styles.smallTxt, { marginVertical: 5 }]}>{psubTitle}</Text>
      <Text
        style={[styles.smallTxt, { fontSize: 12, color: "gray" }]}
        numberOfLines={3}
        ellipsizeMode={"tail"}
      >
        {subTitle}
      </Text>
    </View>
  );

  const _renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("details", { itemId: item.titleTxt })}
    >
      <Item
        title={item.titleTxt}
        psubTitle={item.price}
        subTitle={item.subTxt}
      />
    </Pressable>
  );
  return (
    <View>
      <FlatList
        horizontal
        bounces
        alwaysBounceHorizontal
        data={Data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={[styles.headerSectionWrap, styles.mh15]}>
              <ProfileAvatar />
              <NotificationBell />
            </View>
            <View style={[styles.mh15, { marginVertical: 30 }]}>
              <Search />
            </View>
            <View>
              <HeroBanner />
            </View>
            <TitleHeaderBar title={"Popular"} actionTxt={"Show All"} />
          </>
        }
        ListFooterComponent={
          <>
            <ScrollableCards />
            <TitleHeaderBar title={"Featured"} actionTxt={"Show All"} />
            <ScrollableCards />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
