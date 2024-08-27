import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />/
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
