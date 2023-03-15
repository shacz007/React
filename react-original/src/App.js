import React, { Component } from "react";
import Greet from './components/Greet';
import Welcome from "./components/Welcome(cls)";
import Message from "./components/Message";
import Andex from "./components/prod/Andex";
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import Eventbind from "./components/Eventbind";
import InsertIMG from "./components/InsertIMG";
import InsertIMGcls from "./components/InsertIMGcls";
import FuncPropCom from "./components/prostack/FuncPropCom";
import FuncPropCom1 from "./components/prostack/FuncPropCom1"
import ClassPROP from "./components/prostack/ClassPROP";


class App extends Component {
    render() {
        return (
            <div className="App">
                
                <FuncPropCom/>
                {/* <FuncPropCom1/> */}
                {/* <ClassPROP></ClassPROP> */}
                {/* <InsertIMG/>     */}
                {/* <InsertIMGcls/> */}
                {/* <Counter/> */}
                {/* <FunctionClick /> */}
                {/* <ClassClick /> */}
                {/* <Eventbind/> */}
                {/* <Andex/>
                <Greet name="sac" surname="dds">
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