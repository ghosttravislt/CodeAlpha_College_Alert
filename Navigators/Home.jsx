import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  return (
    <>
      <View style={navContianer.viewcontainer}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("lecture");
          }}
          activeOpacity={0.5}
          underlayColor="#"
          // style={navContianer.Touchable}
        >
          <View style={navContianer.navstyle}>
            <Text style={navContianer.textstyle}>
              <View style={navContianer.texticonstyle}>
                <Ionicons
                  name="school"
                  style={navContianer.iconstyle}
                ></Ionicons>
              </View>
            </Text>
            <Text style={navContianer.textsize}>lecture</Text>
            <Text style={navContianer.textsize2}>0</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Seminars");
          }}
          activeOpacity={0.5}
          underlayColor="#"
        >
          <View style={navContianer.navstyle}>
            <Text style={navContianer.textstyle}>
              <View style={navContianer.texticonstyle}>
                <Ionicons
                  name="telescope"
                  style={navContianer.iconstyle}
                ></Ionicons>
              </View>
            </Text>
            <Text style={navContianer.textsize}>Seminar</Text>
            <Text style={navContianer.textsize2}>0</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Workshop");
          }}
          activeOpacity={0.5}
          underlayColor="#"
        >
          <View style={navContianer.navstyle}>
            <Text style={navContianer.textstyle}>
              <View style={navContianer.texticonstyle}>
                <Ionicons
                  name="hammer"
                  style={navContianer.iconstyle}
                ></Ionicons>
              </View>
            </Text>
            <Text style={navContianer.textsize}>Workshop</Text>
            <Text style={navContianer.textsize2}>0</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Others");
          }}
          activeOpacity={0.5}
          underlayColor="#"
        >
          <View style={navContianer.navstyle}>
            <Text style={navContianer.textstyle}>
              <View style={navContianer.texticonstyle}>
                <Ionicons
                  name="sync-circle"
                  style={navContianer.iconstyle}
                ></Ionicons>
              </View>
            </Text>
            <Text style={navContianer.textsize}>Other</Text>
            <Text style={navContianer.textsize2}>0</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={newsSection.newscontainer}>
        <Text style={newsSection.news}>
          News <Ionicons name="newspaper" style={newsSection.icon}></Ionicons>{" "}
        </Text>

        <ScrollView>
          <View style={newslist.listContainer}>
            <Image
              source={require("../assets/basket.jpeg")}
              style={newslist.imagestyle}
            />
            <View style={newslist.newsInfo}>
              <Text style={newslist.newstitle}>Campus Basketball</Text>
              <Text style={newslist.newspage}>
                In a thrilling game last night, the Los Angeles Lakers edged out
                the Golden State Warriors with a 112-109 victory.
              </Text>
            </View>
          </View>
          <View style={newslist.listContainer}>
            <Image
              source={require("../assets/basket.jpeg")}
              style={newslist.imagestyle}
            />
            <View style={newslist.newsInfo}>
              <Text style={newslist.newstitle}>Campus Basketball</Text>
              <Text style={newslist.newspage}>
                In a thrilling game last night, the Los Angeles Lakers edged out
                the Golden State Warriors with a 112-109 victory.
              </Text>
            </View>
          </View>
          <View style={newslist.listContainer}>
            <Image
              source={require("../assets/basket.jpeg")}
              style={newslist.imagestyle}
            />
            <View style={newslist.newsInfo}>
              <Text style={newslist.newstitle}>Campus Basketball</Text>
              <Text style={newslist.newspage}>
                In a thrilling game last night, the Los Angeles Lakers edged out
                the Golden State Warriors with a 112-109 victory.
              </Text>
            </View>
          </View>
          <View style={newslist.listContainer}>
            <Image
              source={require("../assets/basket.jpeg")}
              style={newslist.imagestyle}
            />
            <View style={newslist.newsInfo}>
              <Text style={newslist.newstitle}>Campus Basketball</Text>
              <Text style={newslist.newspage}>
                In a thrilling game last night, the Los Angeles Lakers edged out
                the Golden State Warriors with a 112-109 victory.
              </Text>
            </View>
          </View>
          <View style={newslist.listContainer}>
            <Image
              source={require("../assets/basket.jpeg")}
              style={newslist.imagestyle}
            />
            <View style={newslist.newsInfo}>
              <Text style={newslist.newstitle}>Campus Basketball</Text>
              <Text style={newslist.newspage}>
                In a thrilling game last night, the Los Angeles Lakers edged out
                the Golden State Warriors with a 112-109 victory.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Home;

const navContianer = StyleSheet.create({
  navstyle: {
    marginTop: 40,
    marginLeft: 10,
    height: 140,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  viewcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 20,
  },

  textsize: {
    fontSize: 26,
    paddingLeft: 14,
    fontWeight: "500",
    position: "absolute",
    left: 60,
    top: 20,
  },
  textsize2: {
    fontSize: 45,
    paddingLeft: 140,
    fontWeight: "600",
  },

  iconstyle: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    color: "black",
  },

  texticonstyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#9ef01a",
    alignContent: "center",
  },

  textstyle: {
    margin: 10,
  },

  Touchable: {
    height: 120,
    // marginTop: 20,
    opacity: 0,
  },
});

const newsSection = StyleSheet.create({
  newscontainer: {
    marginTop: 25,
    marginLeft: 14,
    marginRight: 20,
    height: 420,
    width: 420,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#ffff",
  },
  // styling the news section

  news: {
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 10,
  },

  icon: {
    fontSize: 30,
  },
});

const newslist = StyleSheet.create({
  listContainer: {
    height: 120,
    marginTop: 20,
    marginLeft: 10,
    paddingLeft: 10,
    paddingTop: 10,
    width: 350,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
  },

  imagestyle: {
    height: 90,
    width: 100,
    borderRadius: 10,
  },

  newsInfo: {
    marginLeft: 20,
    width: 200,
    height: 85,
    // paddingVertical: 10,
    overflowY: "hidden",
  },
  newstitle: {
    fontSize: 20,
    fontWeight: "600",
  },
});
