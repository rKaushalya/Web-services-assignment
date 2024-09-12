import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WelcomePage} from "./view/pages/WelcomePage/WelcomePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={WelcomePage}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
