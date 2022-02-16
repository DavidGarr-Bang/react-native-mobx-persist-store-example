import * as React from "react";
import { Text, Subheading, Card } from "react-native-paper";

import moment from "moment";

import { makeObservable, observable, action } from "mobx";
import { observer, inject } from "mobx-react";

class Time {
  time = moment().format("MMM Do YY");

  constructor() {
    makeObservable(this, {
      time: observable,
    });
  }
}

const myTimer = new Time();

export const TimerView = observer(() => (
  <Text style={{ textAlign: "center" }}>{myTimer.time}</Text>
));
