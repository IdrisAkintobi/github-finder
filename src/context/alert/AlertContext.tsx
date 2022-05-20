import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

type Props = {
  children?: React.ReactNode;
};

// type ContextProp = any;

const AlertContext = createContext<any>(null);

export const AlertProvider: React.FC<Props> = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
