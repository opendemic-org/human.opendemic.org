import * as actions from "./actions";

export default {
  show: (visible, options = {}) => {
    return (dispatch) => {
      if (visible) {
        dispatch(actions.show(options.value, options.component));
      } else {
        if (options.hideIfReady) {
          if (document.readyState === "complete") {
            dispatch(actions.hide());
          }
        }
        dispatch(actions.hide());
      }
    };
  },
};
