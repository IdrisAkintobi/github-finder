import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <>{alert && <div className="text-red-600 font-bold">{alert.msg} </div>}</>
  );
};

export default Alert;
