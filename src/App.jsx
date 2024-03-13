import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/About";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
