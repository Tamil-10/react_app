import { userActionTypes } from "./action";

export const userInitialState = {
  users: []
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USERS: {
      return Object.assign({}, state, {
        users: action.users
      });
    }

    default:
      return state;
  }
};

export default user;
