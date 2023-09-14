// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import './horizon.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Hero from './Components/Hero';
import Carousel from './Components/Carousel';
import Plans from './Components/Plans';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <Hero />
        <Carousel />
        <Plans />
        <Footer />
      </div>
    );
  };
};

export default App;

