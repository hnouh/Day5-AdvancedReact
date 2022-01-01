import { useState, useRef, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Timer = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={() => ctx.setIsLogged(false)}>Logout</button>
      {ctx.isLogged ? (
        <>
          <h3>{timer}</h3>
          <button onClick={() => clearInterval(intervalRef.current)}>
            Clear Timer
          </button>
        </>
      ) : (
        navigate("/Windows")
      )}
    </div>
  );
};
export default Timer;
