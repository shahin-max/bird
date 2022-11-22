import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          <ProductList />
          </Route>
            <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
