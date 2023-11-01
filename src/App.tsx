
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VisualMode from './components/VisualMode';
import ProyectosIframes from './components/ProyectosIframes';
import VisualModeBye from './components/VisualModeBye';



function App(): JSX.Element {


  return (
    <>

    <Router>
        {/* <Main id="inicio" /> */}
        {/* <Destacado />  */}
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/modo-visual" Component={VisualMode} />
        <Route path="/modo-visual-bye" Component={VisualModeBye} />
        <Route path="/modo-visual/proyectos" Component={ProyectosIframes} />

      </Routes>
      

    </Router>
    </>
  );
}

export default App;
