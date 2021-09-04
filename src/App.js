import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // you will notice that i'm handling the constraints here not on my reducer
  const handleIncrement = () => state < 10 && dispatch({ type: "INCREMENT" });
  const handleDecrement = () => state > 0 && dispatch({ type: "DECREMENT" });
  return (
    <div className='App'>
      <h1>state = greater than 0 and less than 10</h1>
      <p>state: {state}</p>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
