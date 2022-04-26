import React from "react";
import {FaCrosshairs} from 'react-icons/fa';
import picture1 from './image/mainPicture1.jpg';
const MainOneSection = () => {

    return(
        <>
            <div className="wrapperMom">
                <br/>
                <br/>
                <span className="menuSelect"><h2><FaCrosshairs className="FaCrosshairs" color='#3EB489' />오늘의 추천 메뉴</h2></span>
            </div>
      <div className="wrapperMom">
        <div className="wrapper">
            <div className="item"></div>
          <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
      </div>
        </>
);
}
export default MainOneSection;