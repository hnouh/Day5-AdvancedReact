import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Timer from './pages/Timer'
import Timer from "./pages/Timer";
import Name from "./pages/Name";
import Counter from "./pages/Counter";
import Resource from "./pages/Resource";
import Windows from "./pages/Windows";
// import FormTest from './pages/FormTest'
import AuthContext from "./store/auth-context";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DocumentTitle1 from "./components/DocumentTitle1";
import DocumentTitle2 from "./components/DocumentTitle2";
import TestStyle from "./pages/TestStyle";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);
  return (
    <AuthContext.Provider value={{ isLogged: isLogged, setIsLogged }}>
      <div className="App">
        <div className="App">
          <NavBar></NavBar>
          <br></br>
          <DocumentTitle1 />
          <DocumentTitle2 />
          <br></br>

          <Routes>
            <Route path="/Timer" element={<Timer />}></Route>
            <Route path="/Name" element={<Name />}></Route>
            <Route path="/Counter" element={<Counter />}></Route>
            <Route path="/Windows" element={<Windows />}></Route>
            <Route path="/Resource" element={<Resource />}></Route>
            <Route path="/TestStyle" element={<TestStyle />}></Route>
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
