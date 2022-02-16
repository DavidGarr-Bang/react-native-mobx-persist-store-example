import * as React from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import Constants from "expo-constants";

import { Text, Subheading, Card } from "react-native-paper";
import { observer, inject } from "mobx-react";

const App = (props) => {
  const { navigation, route } = props;
  const { count, addcount, reducecount } = props.store.counter;

  React.useEffect(() => {
    // console.log(props.store.apiFatch);
  });

  return (
    <View style={styles.container}>
      <Subheading>MOBX REACT Native Example</Subheading>
      <Text style={styles.paragraph}>{count}</Text>

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Pressable
          onPress={() => addcount()}
          style={{ backgroundColor: "#0e6fcf" }}
        >
          <Text style={{ textAlign: "center" }}>Add</Text>
        </Pressable>

        <Pressable
          onPress={() => reducecount()}
          style={{ backgroundColor: "#0e6fcf" }}
        >
          <Text style={{ textAlign: "center" }}>Subtract</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default inject("store")(observer(App));

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
