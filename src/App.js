import "./App.css";
import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => console.log("clicked me")}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
