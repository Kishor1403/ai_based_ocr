export const authReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "SWITCH_AUTH_FORM":
      return {
        ...state,
        authForm: {
          ...state.authForm,
          type: state.authForm.type === "login" ? "register" : "login",
        },
      };
    case "UPDATE_AUTH_FORM":
      return {
        ...state,
        authForm: {
          ...state.authForm,
          [action.payload.name]: action.payload.value,
        },
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
