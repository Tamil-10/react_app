import axios from "axios";

export const userActionTypes = {
  SET_USERS: "SET_USERS"
};

/**
 * Add a URL parameter
 * @param {string} url
 * @param {string} param the key to set
 * @param {string} value
 */

const addUrlParam = (url, param, value) => {
  param = encodeURIComponent(param);
  var a = document.createElement("a");
  param += value ? "=" + encodeURIComponent(value) : "";
  a.href = url;
  a.search += (a.search ? "&" : "") + param;
  return a.href;
};

export const getUsers = (data) => async (dispatch) => {
  try {
    let url = "https://gorest.co.in/public-api/users";
    if (data) {
      Object.keys(data).forEach((key) => {
        if (data[key]) {
          url = addUrlParam(url, key, data[key]);
        }
      });
    }

    const response = await axios.get(url);
    dispatch({
      type: userActionTypes.SET_USERS,
      users: response.data.data
    });
  } catch (error) {
    dispatch({
      type: userActionTypes.SET_USERS,
      users: []
    });
  }
};
