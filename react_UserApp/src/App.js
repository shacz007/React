import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserApp from "./components/UserApp";
import { Component } from "react";

class App extends Component {
  render() {
      return (
          <div>
              <Router>
                  <Nav />
                  <Routes>
                      <Route path="/user" element={<UserApp />} />
                  </Routes>
              </Router>
          </div>
      )
  }
}

export default App;
 