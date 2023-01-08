import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h2>HELLLO</h2>
      <Routes>
        <Route path="/" element={<h2>HOME PAGE</h2>} />
      </Routes>
    </div>
  );
};

export default App;
