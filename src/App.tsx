import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Investors from "./pages/Investors";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/investors" element={<Investors />} />
      
    </Routes>
  );
};

export default App;
