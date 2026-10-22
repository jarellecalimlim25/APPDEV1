
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <main className="page">
      <section
        className="image-panel"
        aria-label="Coffee and books background"
      />

      <section className="login-panel">
        <Login />
      </section>
    </main>
  );
}

export default App;
