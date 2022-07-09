import { Routes, Route } from 'react-router-dom';
import Navbar from './component/shared/Navbar/Navbar';
import Home from './component/Pages/Home/Home';
import Footer from './component/shared/Footer/Footer';
import About from './component/Pages/About/About';
import Work from './component/Pages/Work/Work';
import Products from './component/Pages/Products/Products';
import Blogs from './component/Pages/Blogs/Blogs';

function App() {
  return (
    <section>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="work" element={<Work></Work>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
