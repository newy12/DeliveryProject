import React, {useState} from "react";
import NavBar from "./NavBar";
import {Button, Col, Container, Offcanvas, Row} from "react-bootstrap";
import {FaRegEdit,FaRegPaperPlane} from "react-icons/fa";
import {Link} from "react-router-dom";
import MainOneSection from "./MainOneSection";

const Main = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
      <>
            <NavBar/>
            <MainOneSection/>
          <Button variant="primary" onClick={handleShow}>
              Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose} className="modalStyle">
              <Offcanvas.Header className="offcanvasHeader" closeButton>
                  <Offcanvas.Title><FaRegPaperPlane className="FaRegPaperPlane"/> 빠른메뉴</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <Offcanvas.Title><Link as={Link} to="/login" id="login"><b>로그인</b></Link></Offcanvas.Title>
                  <br />
                  <Offcanvas.Title><Link as={Link} to="/signUp" id="signup"><b>회원가입</b></Link></Offcanvas.Title>
                  <br />
                  <Offcanvas.Title><Link as={Link} to="/notice" id="notice"><b>공지사항</b></Link></Offcanvas.Title>
                  <br />
                  <Offcanvas.Title><Link as={Link} to="/board" id="board"><b>자유게시판</b></Link></Offcanvas.Title>
              </Offcanvas.Body>
          </Offcanvas>
      </>
    );
}
export default Main;