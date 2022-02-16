import { makeObservable, observable, action, computed } from "mobx";

class ApiFatch {
  loading = false;
  data = false;

  constructor() {
    makeObservable(this, {
      data: observable,
      loading: observable,
      updateText: action,
      getApi: action,
      setData: action,
      setLoading: action,
    });
  }

  updateText = (text) => {
    this.text = text;
  };

  getApi = async () => {
    this.setLoading(true);
    try {
      const response = await fetch(
        "https://universal-back-server.herokuapp.com/api/example/maths/addition",
      );
      const json = await response.json();
      this.setData(json);
    } catch (error) {
      console.error(error);
    }
    this.setLoading(false);
  };

  setData = (data) => {
    this.data = data;
  };

  setLoading = (type) => {
    this.loading = type;
  };
}

export default ApiFatch;
