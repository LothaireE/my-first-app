import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import Constant from "expo-constants";

export default function App() {
  return (
    // <View style={styles.container}>
    // <StatusBar style="auto" />
    // <StatusBar style="auto" />
    //  <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View>
        <View style={styles.topbar}>
          <Text>logo à venir</Text>
          <Image
            source={require("./assets/logo-IMDb-4.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
    // marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  topbar: {
    borderWidth: 1,
    backgroundColor: "gray",
    height: 100,
  },
  logo: {
    height: 100,
    width: 200,
  },
});
