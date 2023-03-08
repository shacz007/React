import React, { Component } from "react";
import Greet from './components/Greet';
import Welcome from "./components/Welcome(cls)";
import Message from "./components/Message";

class App extends Component{
    render(){
        return(
            <div className="App">
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
                <Message/>
            </div>
        )
    }
}
export default App