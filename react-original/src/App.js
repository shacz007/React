import React, { Component } from "react";
import Greet from './components/codevo/Greet';
import Welcome from "./components/codevo/Welcome(cls)";
import Message from "./components/codevo/Message";
import Counter from "./components/codevo/Counter"
import FunctionClick from "./components/codevo/FunctionClick";
import ClassClick from "./components/codevo/ClassClick";
import Eventbind from "./components/codevo/Eventbind";
import InsertIMG from "./components/codevo/InsertIMG";
import InsertIMGcls from "./components/codevo/InsertIMGcls";
import FuncPropCom from "./components/prostack/FuncPropCom";
import FuncPropCom1 from "./components/prostack/FuncPropCom1"
import ClassPROP from "./components/prostack/ClassPROP";
import States from "./components/prostack/States";
import Parentcomponent from "./components/codevo/Parentcomponent";
import Usergreeting from "./components/codevoFrom16/conditional render/Usergreeting";
import NameList from "./components/codevoFrom16/List render/NameList";
import PersonList from "./components/codevoFrom16/List render/PersonList";
import PersonList1 from "./components/codevoFrom16/List render/PersonList1";
import Normal from "./components/prostack/bind/Normal";
import WithBind from "./components/prostack/bind/WithBind";
import Loginform from "./components/prostack/Form Handling/Loginform1"
import Loginform2 from "./components/prostack/Form Handling/Loginform2";
import Loginform3 from "./components/prostack/Form Handling/Loginform3";
import USER1 from "./components/prostack/AxiosWlifecycle/USER1";
import USER2 from "./components/prostack/AxiosWlifecycle/USER2";
import DigitalClock from "./components/prostack/AxiosWlifecycle/DigitalClock";

class App extends Component {
    render() {
        return (
            <div className="App">
                <DigitalClock/>
                {/* <USER2/> */}
                {/* <USER1/> */}
                {/* <Loginform3/> */}
                {/* <Loginform2></Loginform2> */}
                {/* <Loginform1/> */}
                {/* <WithBind/> */}
                {/* <Normal/> */}
                {/* <PersonList1/> */}
                {/* <PersonList/> */}
                {/* <NameList/> */}
                {/* <Usergreeting/> */}
                {/* <Parentcomponent></Parentcomponent> */}
                {/* <States/> */}
                {/* <FuncPropCom/> */}
                {/* <FuncPropCom1/> */}
                {/* <ClassPROP></ClassPROP> */}
                {/* <InsertIMG/>     */}
                {/* <InsertIMGcls/> */}
                {/* <Counter/> */}
                {/* <FunctionClick /> */} 
                {/* <ClassClick /> */}
                {/* <Eventbind/> */}
               {/* <Greet name="sac" surname="dds">
                    <p> 1st person</p>
                    </Greet>
                <Greet name="sacyt" surname="ggs">
                    <button>SUBMIT</button>
                    </Greet>
                <Greet name="sada" surname="hth"/>
                <Welcome name="kali"/>
                <hr></hr>
                <Welcome name="kgaagali"/>
                <Welcome name="kartyrli"/>
                <hr></hr>
                <Message/> */}
            </div>
        )
    }
}
export default App