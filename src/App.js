import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavMenu from './Comp';

const Menue = [
  { titele: "Home", link: "#" },
  { titele: "Service", link: "#", SubMenue: ["for entreprise", "for student", "for hobbys"] },
  { titele: "Contact", link: "#" },
]
function App() {
  return (
    <div className="App">
      <NavMenu data={Menue} />
     
    </div>)
}

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

 export default App;


