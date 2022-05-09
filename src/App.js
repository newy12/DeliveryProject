import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import {Link,Route,Routes} from "react-router-dom";
import React from "react";
import KoreaFood from "./KoreaFood";
import JapanFood from "./JapanFood";
import ChinaFood from "./ChinaFood";
import $ from 'jquery';
import Signup from "./Signup";
import Login from "./Login";
import Auth from "./Auth";
const App = () => {
  return (
          <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/koreaFood" element={<KoreaFood/>}/>
              <Route path="/japanFood" element={<JapanFood/>}/>
              <Route path="/chinaFood" element={<ChinaFood/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/oauth/kakao/callback" element={<Auth/>}/>
              <Route path="/profile" element={<Login/>}/>
          </Routes>
  );
}
const clickEvent = () => {

    $('#koreaFood').click(function (){
        alert("dd");
    });
}

export default App;
