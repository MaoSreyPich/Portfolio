import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [page, setPage] = useState("About");

  return (
    <main className="container">
      <Sidebar />

      <div className="main-content">
        <Navbar page={page} setPage={setPage} />

        {page === "About" && <About />}
        {page === "Resume" && <Resume />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Contact" && <Contact />}
      </div>
    </main>
  );
}

export default App;