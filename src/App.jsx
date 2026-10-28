
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">TP React — Séance 8</p>
        <h1>🌍 Explorateur de pays</h1>
        <p>Découvrez les pays du monde grâce à une API.</p>
      </header>

      <section className="countries-section">
        <h2>Les pays du monde</h2>

        <div className="countries-grid">
          {/* Les cartes seront ajoutées pendant le TP */}
        </div>
      </section>
    </main>
  );
}

export default App;
