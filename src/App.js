import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import {QuantityProvider } from "./Context/QuantityContext";

function App() {
  return (
    <BrowserRouter>
      <QuantityProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </QuantityProvider>
    </BrowserRouter>
  );
}

export default App;
