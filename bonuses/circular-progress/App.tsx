/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import timing from "react-native-redash";

import CircularProgress from "./components/CircularProgress2";

const { Clock } = Animated;

export default () => {
  const clock = new Clock();
  const config = {
    duration: 10 * 1000,
    to: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <CircularProgress progress={timing(config, clock)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
