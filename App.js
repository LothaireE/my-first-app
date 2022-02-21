import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import Constant from "expo-constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    // <View style={styles.container}>
    // <StatusBar style="auto" />
    // <StatusBar style="auto" />
    //  <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <ScrollView>
        <View style={styles.topbar}>
          {/* <Text>logo à venir</Text> */}
          <Image
            source={require("./assets/logo-IMDb-6.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.aboutBlock}>
          <Text style={styles.aboutTitle}>Interstellar</Text>
          <View>
            <View style={styles.aboutInfo}>
              <Text style={styles.infoText}>2014</Text>
              <Text style={styles.infoText}>PG-13</Text>
              <Text style={styles.infoText}>2H49min</Text>
              <Text style={styles.infoText}> Adventure, Drama, Sci-Fi</Text>
            </View>
            {/* *************** about block *************** */}
            <View style={styles.aboutSubInfo}>
              {/* *************** left *************** */}

              <Image
                source={require("./assets/images/film.jpg")}
                style={styles.aboutCover}
                resizeMode="contain"
              />
              {/* *************** right *************** */}
              <View style={styles.rightBlock}>
                <Text style={styles.aboutResume}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableOpacity style={styles.aboutBtn}>
                  <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.criticsBlock}>
              <View style={styles.critic}>
                <Ionicons
                  style={styles.criticLogos}
                  name="ios-star"
                  size={24}
                  color="#E6B91E"
                />
                <Text style={styles.criticFirstLine}>8.6/10</Text>
                <Text style={styles.criticSecondLine}>1.1M</Text>
              </View>
              <View style={styles.critic}>
                <Ionicons
                  style={styles.criticLogos}
                  name="star-outline"
                  size={24}
                  color="#E6E6E6"
                />
                <Text style={styles.criticFirstLine}>Rate this</Text>
                <Text style={styles.criticSecondLine}></Text>
              </View>
              <View style={styles.critic}>
                <Text style={styles.criticLogosThree}> 74 </Text>
                <Text style={styles.criticFirstLine}>Metascore</Text>
                <Text style={styles.criticSecondLine}>46 critic reviews</Text>
              </View>
            </View>
          </View>
        </View>
        {/* ******************** second part ******************** */}
        <View style={styles.productrionBlock}>
          <View style={styles.castInfo}>
            <Text style={styles.aboutTitle}>Top Billed Cast</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllBtnText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            {/* le parent du carousel distribution*/}
            <View style={styles.castCard}>
              <View style={styles.castPictureBlock}>
                <Image
                  source={require("./assets/images/matthew.jpg")}
                  style={styles.castPicture}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.castNameRole}>
                <Text numberOfLines={1} style={styles.castName}>
                  Matthew MacConneghey
                </Text>
                <Text style={styles.infoText}>Cooper</Text>
              </View>
            </View>
            <View style={styles.castCard}>
              <View style={styles.castPictureBlock}>
                <Image
                  style={styles.castPicture}
                  source={require("./assets/images/anne.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.castNameRole}>
                <Text numberOfLines={1} style={styles.castName}>
                  Anne Hattaway
                </Text>
                <Text style={styles.infoText}>Brand</Text>
              </View>
            </View>
            <View style={styles.castCard}>
              <View style={styles.castPictureBlock}>
                <Image
                  style={styles.castPicture}
                  source={require("./assets/images/jessica.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.castNameRole}>
                <Text numberOfLines={1} style={styles.castName}>
                  Jessica Chastain
                </Text>
                <Text style={styles.infoText}>Murphy</Text>
              </View>
            </View>

            <View style={styles.castCard}>
              <View style={styles.castPictureBlock}>
                <Image
                  style={styles.castPicture}
                  source={require("./assets/images/mackenzie.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.castNameRole}>
                <Text numberOfLines={1} style={styles.castName}>
                  Mackenzie Foy
                </Text>
                <Text style={styles.infoText}>Murphy jeune</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.production}>
            {/* production block */}
            <Text style={styles.productionWork}>Director</Text>
            <Text style={styles.productionName}>Christopher Nolan</Text>
          </View>
          <View style={styles.production}>
            {/* production block */}
            <Text style={styles.productionWork}>Writers</Text>
            <Text style={styles.productionName}>
              Jonathan Nolan(written by) and Christopher Nolan(written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // borderWidth: 1,
    // borderColor: "red",
    // marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  topbar: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: "#212121",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logo: {
    height: 40,
    width: 100,
  },

  //*************** about block ***************//

  aboutBlock: {
    backgroundColor: "#212121",
    marginVertical: 10,
    paddingHorizontal: 10,
    maxHeight: 400,
  },
  aboutTitle: {
    color: "#E6E6E6",
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    marginBottom: 10,
  },
  aboutInfo: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    marginBottom: 20,
  },
  infoText: {
    color: "grey",
  },
  aboutSubInfo: {
    // borderWidth: 1,
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "row",
    marginBottom: 15,
  },
  aboutCover: {
    justifyContent: "flex-start",
    height: "100%",
    flex: 1,
  },
  rightBlock: {
    marginLeft: 5,
    flex: 2,
  },
  aboutResume: {
    color: "#E6E6E6",
    flex: 1,
    height: "50%",
  },

  aboutBtn: {
    height: "50%",
  },
  btnText: {
    width: "100%",
    textAlign: "center",
    color: "white",
    backgroundColor: "#0277BD",
    lineHeight: 30,
  },

  // ******************* critics block *******************

  criticsBlock: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
  },
  critic: {
    // borderWidth: 1,
    // borderColor: "chartreuse",
    // borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  criticLogos: {
    marginBottom: 5,
  },
  criticLogosThree: {
    marginBottom: 5,
    backgroundColor: "#61C750",
    color: "white",
    lineHeight: 25,
  },
  criticFirstLine: {
    color: "#E6E6E6",
    marginBottom: 3,
  },
  criticSecondLine: {
    color: "grey",
  },
  // ***************** productrionBlock *****************
  // cast: {
  //   color: "#E6E6E6",
  //   fontSize: 30,
  // },
  productrionBlock: {
    paddingHorizontal: 10,
    backgroundColor: "#212121",
    // borderWidth: 1,
    // borderColor: "chartreuse",
    // borderWidth: 1,
  },
  castInfo: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeAllBtn: {
    color: "white",
  },
  seeAllBtnText: {
    color: "#0277BD",
    fontWeight: "700",
  },
  productionWork: {
    color: "white",
  },
  productionName: {
    color: "white",
  },

  // ***************** castCard *****************
  castCard: {
    // borderWidth: 1,
    backgroundColor: "#2A2A2A",

    // borderWidth: 1,
    margin: 3,
    width: 150,
    justifyContent: "flex-start",
  },
  castPictureBlock: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderWidth: 1,
    height: 200,
    width: "100%",
    justifyContent: "flex-start",
  },
  castPicture: {
    // borderColor: "blue",
    height: "100%",
    width: "100%",
  },
  castNameRole: {
    margin: 5,
  },
  production: {
    margin: 5,
  },
  castName: {
    color: "#E6E6E6",
  },
  productionName: {
    color: "gray",
  },
  // ***************** productionBlock *****************

  // productionBlock: {
  //   marginBottom: 5,
  // },
});
