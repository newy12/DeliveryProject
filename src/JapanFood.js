import React from "react";
import NavBar from "./NavBar";
import {ListGroup} from "react-bootstrap";
import star from "./image/star.png";
import Kimchi from "./image/kimchi.png";
import whitestar from "./image/whitestar.png";
import bibimbob from "./image/bibimbob.png";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";

const JapanFood = () => {
    return(
        <>
            <NavBar/>
            <ListGroup>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>김치볶음밥</b>]</span>
                        <br/>
                        <span className="kimchiText">윤기가 좌르륵 도는 김치볶음밥</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>7,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={Kimchi} className="kimchi"/>
                    </div>
                </ListGroup.Item>

                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>한국식 비빔밥</b>]</span>
                        <br/>
                        <span className="kimchiText">역시 한국인은 비빔밥이지~!</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={whitestar} className="star"/>
                        <img src={whitestar} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>9,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={bibimbob} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>된장찌개</b>]</span>
                        <br/>
                        <span className="kimchiText">시원한 맛이 일품이지~!</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>5,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={image1} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>김밥</b>]</span>
                        <br/>
                        <span className="kimchiText">가볍게 출출할땐!!!</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={whitestar} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>2,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={image2} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>얼큰한 감자탕</b>]</span>
                        <br/>
                        <span className="kimchiText">해장용으로 정말 좋은 탕</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={whitestar} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>10,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={image3} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>매운떡볶이</b>]</span>
                        <br/>
                        <span className="kimchiText">매운게 당길땐!~?</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>6,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={image4} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>라면</b>]</span>
                        <br/>
                        <span className="kimchiText">오동통한 면발이 일품이다.!</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={whitestar} className="star"/>
                        <img src={whitestar} className="star"/>
                        <img src={whitestar} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>6,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={image5} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>김치볶음밥</b>]</span>
                        <br/>
                        <span className="kimchiText">윤기가 좌르륵 도는 김치볶음밥</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>7,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={Kimchi} className="kimchi"/>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="textGroup">
                        <span className="kimchiText">[<b>김치볶음밥</b>]</span>
                        <br/>
                        <span className="kimchiText">윤기가 좌르륵 도는 김치볶음밥</span>
                        <br/>
                        <span className="score">평점 </span>
                        <span>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        <img src={star} className="star"/>
                        </span>
                        <br/>
                        <span>
                            <b>7,500 원</b>
                        </span>
                    </div>
                    <div className="imgGroup">
                        <img src={Kimchi} className="kimchi"/>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}
export default JapanFood;