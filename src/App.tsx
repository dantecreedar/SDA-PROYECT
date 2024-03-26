import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import { useEffect, useState } from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Products from "./Routes/Products";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <h1>Cargando...</h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="products" element={<Products/>} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;