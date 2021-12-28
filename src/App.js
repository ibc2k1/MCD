import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import InputCardNum from "./page/inputCreditCardNum";
import SelectPayMode from "./page/selectPayMode";
import WrongNum from "./page/wrongNum";
import PrintOrderList from "./page/printOrderList";

function App() {
  const cookieID = "111"
  return (
    <Router>
      <Routes>
        <Route path="/" exact element= {<SelectPayMode/>}/>
        <Route path="/inputCardNum" exact element= {<InputCardNum/>}/>
        <Route path="/wrongNum" exact element= {<WrongNum/>}/>
        <Route path="/printOrderList" exact element= {<PrintOrderList Name = {cookieID}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
