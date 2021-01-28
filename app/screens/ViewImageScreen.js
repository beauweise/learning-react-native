import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from '../config/colors';
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View Style={styles.closeIcon}></View>
      <View Style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/favicon.png")}
      />
    </View>
  );
}
const styles = StyleSheet.Create({
  closeIcon: {
    width: 50,
    height:50,
    backgroundColor: colors.primary,
    position:"absolute",
    top: 40,
    left:30,
  },
    container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon:{
    width: 50,
    height:50,
    backgroundColor:colors.secondary,
    position:"absolute",
    top: 40,
    right:30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
