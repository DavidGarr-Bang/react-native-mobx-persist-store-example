import Counter from "./counter";
import ApiFatch from "./ApiFatch";

import { TimerTest } from "./time";

class RootStore {
  constructor() {
    this.counter = new Counter(this);
    this.apiFatch = new ApiFatch(this);
    // this.timerTest = new TimerTest(this);
  }
}
export default new RootStore();
