type StateType = {
  users: [];
  user: {};
  repos: {};
  loading: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

const GithubReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_REPO":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "CLEAR_USER":
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
