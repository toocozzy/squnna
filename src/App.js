import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Cryptos from "./components/Cryptos/Cryptos";
import Cryptopage from "./pages/Cryptopage/Cryptopage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cryptos" element={<Cryptopage />} />
      </Routes>
    </Layout>
  );
}

export default App;
