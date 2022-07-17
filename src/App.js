import "./App.css";
import List from "./List";

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 Birthdays today</h3>
        <List />
        <button onClick={() => console.log("clicked me")}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
