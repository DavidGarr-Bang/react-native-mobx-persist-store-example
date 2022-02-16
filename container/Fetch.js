import * as React from "react";
import { Button, View, ActivityIndicator, Pressable } from "react-native";

import { Subheading, Text } from "react-native-paper";
import { observer, inject } from "mobx-react";

const App = (props) => {
  const { navigation, route } = props;
  const { loading, data, getApi } = props.store.apiFatch;

  React.useEffect(() => {
    console.log(props.store);
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Subheading>Fetch example</Subheading>

      <Pressable
        style={{ backgroundColor: "#0e6fcf", padding: 10 }}
        onPress={() => getApi()}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Fetch data</Text>
      </Pressable>

      {loading ? <ActivityIndicator /> : null}

      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default inject("store")(observer(App));
