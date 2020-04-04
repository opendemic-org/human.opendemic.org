import * as actions from "./actions";

export default {
  show: (visible, value) => {
    return (dispatch) => {
      if (visible) {
        dispatch(actions.show(value));
      } else {
        dispatch(actions.hide());
      }
    };
  },
};
