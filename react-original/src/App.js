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
import Parentcomponent from "./components/codevo/Parentcomponent";
import Usergreeting from "./components/codevoFrom16/conditional render/Usergreeting";
import NameList from "./components/codevoFrom16/List render/NameList";
import PersonList from "./components/codevoFrom16/List render/PersonList";
import PersonList1 from "./components/codevoFrom16/List render/PersonList1";


class App extends Component {
    render() {
        return (
            <div className="App">

                {/* <PersonList1/> */}
                {/* <PersonList/> */}
                {/* <NameList/> */}
                {/* <Usergreeting/> */}
                {/* <Parentcomponent></Parentcomponent> */}
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