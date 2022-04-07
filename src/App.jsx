import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  function handleMinusClick() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Contador: {counter}</h1>

      <button
        className="plus"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Adicionar 1
      </button>

      <button
        className="any-less"
        onClick={handleMinusClick}
        // onClick={() => counter >= 1 && setCounter(counter - 1)}
      >
        Remover 1
      </button>
    </>
  );
};

export default App;
