import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import {Route,Routes} from 'react-router-dom'
import Product from "./Product";
import Products from "./Products";

function App() {

 
  return <div className="App">
    
    <div className="nav">
      <Nav/>
    </div>
    <div className="router">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<Products/>}/>
      </Routes>
    </div>
  </div>;
}

export default App;
