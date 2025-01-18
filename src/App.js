import logo from './logo.svg';
import './App.css';

import Nav from './Header/Navbar';

import Home from './Home/Home';

import Product from './Products/Products';

import About from './About/About';

import Update from './Update/Update';
import Team from './Team/Team';

import Opinion from './Opinion/Opinion';
import Footer from './Footer/Footer';
import Copy from './Copyright/Copy';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Product />
      <About />
      <Update />
      <Team />
      <Opinion />
      <Footer />
      <Copy />

    </div>
  );
}

export default App;
