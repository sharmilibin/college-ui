import axios from 'axios';
export const makePostRequest = async (url, { data }) => {
  try {
    const res = await axios.post(url, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};
