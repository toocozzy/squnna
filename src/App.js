import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Cryptopage from "./pages/Cryptopage/Cryptopage";
import Newspage from "./pages/Newspage/Newspage";
import Exchangespage from "./pages/Exchangespage/Exchangespage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cryptos" element={<Cryptopage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/exchanges" element={<Exchangespage />} />
      </Routes>
    </Layout>
  );
}

export default App;
