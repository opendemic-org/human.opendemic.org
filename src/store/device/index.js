import { checkMobile } from "../../utils/device.js";

export const initialState = {
  isMobile: checkMobile(),
};

const types = {
  SET_DESKTOP: "@@device/SET_DESKTOP",
  SET_MOBILE: "@@device/SET_MOBILE",
};

const actions = {
  setDesktop: function setDesktop() {
    return { type: types.SET_DESKTOP };
  },
  setMobile: function setMobile() {
    return { type: types.SET_MOBILE };
  },
};

export default {
  setDesktop: () => {
    return (dispatch) => {
      dispatch(actions.setDesktop());
    };
  },
  setMobile: () => {
    return (dispatch) => {
      dispatch(actions.setMobile());
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DESKTOP:
      return {
        ...state,
        isMobile: false,
      };

    case types.SET_MOBILE:
      return {
        ...state,
        isMobile: true,
      };

    default:
      return state;
  }
}
