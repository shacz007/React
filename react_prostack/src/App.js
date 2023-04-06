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
import NAV from './components/prostack/React-router@5/NAV';
import Home from './components/prostack/React-router@5/Home';
import About from './components/prostack/React-router@5/About';
import Services from './components/prostack/React-router@5/Services';
import Login from './components/prostack/React-router@5/Login';
import Contact from './components/prostack/React-router@5/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Message from './Message/Message';

function App() {
  return (
    <>
    <div>
      <hr></hr>
    {/* <div>
        <nav>
            <a href="#">Redux Example</a>
        </nav>
        <Message />
        </div> */}
        <hr></hr>
      {/* <Router>
      <NAV/>
      <Switch>
        <Route path="./Home" component={Home}></Route>
        <Route path="./About" component={About}></Route>
        <Route path="./Services" component={Services}></Route>
        <Route path="./Login" component={Login}></Route>
        <Route path="./Contact" component={Contact}></Route>
      </Switch>
      </Router>  */}
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
