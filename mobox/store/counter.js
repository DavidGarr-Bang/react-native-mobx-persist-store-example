import { makeObservable, observable, action, computed } from "mobx";
import { makePersistable } from "mobx-persist-store";

import AsyncStorage from "@react-native-async-storage/async-storage";

class Counter {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      addcount: action,
      reducecount: action,
      reset: action,
    });

    makePersistable(this, {
      name: "Counter",
      properties: ["count"],
      storage: AsyncStorage,
    }).then(
      action((persistStore) => {
        // console.log(persistStore.isHydrated);
      }),
    );
  }

  addcount = () => {
    this.count++;
  };

  reducecount = () => {
    this.count--;
  };

  reset = () => {
    this.count = 0;
  };
}

export default Counter;
