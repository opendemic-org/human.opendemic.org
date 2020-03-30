import * as actions from "./actions";

export default {
  show: (visible, message, options) => {
    return dispatch => {
      if (visible) {
        dispatch(actions.show(message, options));
      } else {
        dispatch(actions.hide());
      }
    }
  }
};
