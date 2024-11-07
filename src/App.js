import { useState } from "react";
import TravelList from "./travel-list/TravelList";

function App() {
  return (
    <div>
      <TravelList />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setStep((c) => c - 1)}>-</button>
      <span>{step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? "Days from today is "
            : count + " days ago was "}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default App;
