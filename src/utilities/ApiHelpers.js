import axios from "axios";
export const makePostRequest = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    throw e;
  }
};
export const makeGetRequest = async (url, data) => {
  try {
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    throw e;
  }
};
