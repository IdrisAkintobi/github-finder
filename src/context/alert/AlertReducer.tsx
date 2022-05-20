type StateType = {
  alert?: any;
} | null;

type ActionType = {
  type: string;
  payload?: any;
};

const AlertReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return null;
  }
};

export default AlertReducer;
