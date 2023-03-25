export const CHANGEHANDLER = "changeHandler";
export const FOCUSHANDLER = "focusHandler";
export const SUBMITHANDLER = "changeHandler";
export const BLURHANDLER = "blurHandler";

export const data = {
  formInput: {},
  errors: {},
  focus: false
};

const formReducer = (state, action) => {
  switch (action.type) {
    case CHANGEHANDLER:
      if (action.val) {
        const { name, value, type, checked } = action.val;
        return {
          ...state,
          errors: { ...state.errors, [name]: false },
          formInput: {
            ...state.formInput,
            [name]: type === "checkbox" ? checked : value
          }
        };
      }
      return state;
    case SUBMITHANDLER:
      console.log(state.formInput);
      return state;
    case BLURHANDLER:
      if (state.focus && !state.formInput[action.name]) {
        return {
          ...state,
          errors: { ...state.errors, [action.name]: action.name }
        };
      } else {
        return {
          ...state,
          errors: { ...state.errors, [action.name]: false }
        };
      }
    case FOCUSHANDLER:
      return { ...state, focus: true };
    default:
      return state;
  }
};

export default formReducer;
