import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(5);

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Increment + Hello Member
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Hello
  const sayHello = () => {
    alert("Hello! Member!");
  };

  // Welcome
  const welcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  const onPress = () => {
    alert("I was clicked");
  };

  // Currency Converter
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currency.toLowerCase() === "euro") {
      const euro = amount * 80;
      alert("Converting to Euro Amount is " + euro);
    } else {
      alert("Enter Currency as Euro");
    }
  };

  return (
    <div style={{ margin: "20px" }}>

      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => welcome("welcome")}>
        Say welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount: </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency: </label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;