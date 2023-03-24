import './App.css';
import Normal from "./components/prostack/bind/Normal";
import WithBind from "./components/prostack/bind/WithBind";
import Loginform from "./components/prostack/Form Handling/Loginform1"
import Loginform2 from "./components/prostack/Form Handling/Loginform2";
import Loginform3 from "./components/prostack/Form Handling/Loginform3";
import USER1 from "./components/prostack/AxiosWlifecycle/USER1";
import USER2 from "./components/prostack/AxiosWlifecycle/USER2";
import DigitalClock from "./components/prostack/AxiosWlifecycle/DigitalClock";
import FuncPropCom from "./components/prostack/states&props/FuncPropCom";
import FuncPropCom1 from "./components/prostack/states&props/FuncPropCom1"
import ClassPROP from "./components/prostack/states&props/ClassPROP"; 
import States from "./components/prostack/states&props/States";
import NAV from './components/prostack/React-router/NAV';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './components/prostack/React-router/Home';
import About from './components/prostack/React-router/About';
import Services from './components/prostack/React-router/Services';
import Login from './components/prostack/React-router/Login';
import Contact from './components/prostack/React-router/Contact';

function App() {
  return (
    <>
    <div>
      <Router>
      <NAV/>
      <Switch>
        <Route path="./Home" component={Home}></Route>
      </Switch>
      </Router> 
      </div>  
      {/* <DigitalClock /> */}
      {/* <USER2/> */}
      {/* <USER1/> */}
      {/* <Loginform3/> */}
      {/* <Loginform2></Loginform2> */}
      {/* <Loginform1/> */}
      {/* <WithBind/> */}
      {/* <Normal/> */}
      {/* <FuncPropCom/> */}
      {/* <FuncPropCom1/> */}
      {/* <States/> */}
      {/* <ClassPROP></ClassPROP> */}

    </>
  )
}
export default App
