import axios from "axios";

export function getData(path) {
  console.log("[getList:entry] ", url);

  let params = null;
  if (path) {
    params = path.split("/");
  }

  if (!params || params.length < 2) {
    return "";
  }

  let result = axios
    .get(url)
    .then((response) => {
      console.log("axio (success) ", response.data);
      return [response.data, true];
    })
    .catch((error) => {
      console.log("axio (failure) ", error);
      return [error, false];
    });

  console.log("[getList:result] ", result);
  return result;
}
