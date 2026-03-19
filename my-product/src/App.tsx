import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
// import ProductWrite from "./components/ProductInsert";
// import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="container p-10 mx-auto max-w-rxl">
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* <Route path="/write" element={<ProductWrite />} /> */}
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
