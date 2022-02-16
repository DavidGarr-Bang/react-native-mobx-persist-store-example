import React from "react";
import Nav from "./Nav";

import { Provider } from "mobx-react";

import Root from "./mobox/store/root";

const App = () => {
  return (
    <Provider store={Root}>
      <Nav />
    </Provider>
  );
};

export default App;
