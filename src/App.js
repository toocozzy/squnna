import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
