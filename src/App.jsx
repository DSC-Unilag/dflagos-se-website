import HomePage from "./Components/HomePage/Homepage";
import Workshop from "./Components/Workshop/Workshop";
import Banner from "./Components/Banner/Banner";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </>
  );
}

export default App;
