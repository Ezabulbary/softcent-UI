import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/shared/Footer/Footer';
import Navbar from './component/shared/Navbar/Navbar';

function App() {
  return (
    <section>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
