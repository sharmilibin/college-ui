import axios from 'axios';
export const makePostRequest = async (url, { data }, auth) => {
  console.log('printing auth', auth);
  try {
    const res = await axios.post(
      url,
      data,
      {
        headers: {
          Authorization: auth
        }
      },
      { withCredentials: true }
    );
    return res;
  } catch (e) {
    throw e;
  }
};
