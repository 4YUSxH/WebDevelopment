import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import AboutAnyhting from "./pages/AboutAnyhting";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Performing Routing */}
      <Routes>

        <Route path="/" element={<Home />}/> {/* /(Url mai) route par Home dikhega */}
        <Route path="/about" element={<About />}/> {/* /about(Url mai) route par About dikhega */}
        <Route path="/product" element={<Product />}/>
     
        {/* Nested Route */}
        <Route path="/product/men" element={<Men />}/> {/* /product/men route par ye dikhega */}
        <Route path="/product/women" element={<Women />}/> 

        {/* Dynamic Route */}
        <Route path="/about/:anyvar" element={<AboutAnyhting />}/> {/* :any_var_name, :anyvar mai kuch bhi random type karoge url(/about/me) mai to ye page dikhega */}

        {/* Nested Dynamic Route */}
        {/* <Route path="/about/:anyvar/detail" element={<AboutAnyhting />}/> about-> static route, deatil->static route, but :anyvar->dynamic route */}

        {/* Not Found Page Route */}
        <Route path="*" element={<NotFound />}/> 

      </Routes>
    </div>
  );
};

export default App;
