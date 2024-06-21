import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import './Static/css/font-awesome.min.css'
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import HomePage from "./Pages/HomePage/HomePage";
import DescriptionPage from "./Pages/DescriptionPage/DescriptionPage.jsx";
function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<HomePage />} /> 
       
    <Route path="/plp" element={<ProductPage />} />
    <Route path="/desc/:loc/:id" element={<DescriptionPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
