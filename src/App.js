import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import {Link,Route,Routes} from "react-router-dom";
import React from "react";
import KoreaFood from "./KoreaFood";
import JapanFood from "./JapanFood";
import ChinaFood from "./ChinaFood";
import $ from 'jquery';
const App = () => {
  return (
          <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/koreaFood" element={<KoreaFood/>}/>
              <Route path="/japanFood" element={<JapanFood/>}/>
              <Route path="/chinaFood" element={<ChinaFood/>}/>
          </Routes>
  );
}
const clickEvent = () => {

    $('#koreaFood').click(function (){
        alert("dd");
    });
}

export default App;
