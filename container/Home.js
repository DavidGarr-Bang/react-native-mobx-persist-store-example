import * as React from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import Constants from "expo-constants";

import { Text, Subheading, Card } from "react-native-paper";

import { observer, inject } from "mobx-react";
import { TimerView } from "../mobox/store/time";

function App(props) {
  const { navigation, route } = props;

  React.useEffect(() => {
    // console.log(props.route);
  });

  return (
    <View style={styles.container}>
      <TimerView />
      <Subheading style={{ textAlign: "center" }}>
        MOBX React Native Example
      </Subheading>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Pressable
          style={{ margin: 5, backgroundColor: "#0e6fcf", padding: 10 }}
          onPress={() => {
            navigation.push("Counter");
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            View counter example
          </Text>
        </Pressable>

        <Pressable
          style={{ margin: 5, backgroundColor: "#0e6fcf", padding: 10 }}
          onPress={() => {
            navigation.push("Fetch");
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            View Fetch example
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
