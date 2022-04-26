import React, {useEffect} from "react";
import {Nav, NavItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useLocation} from "react-router-dom";
import {FaAngleLeft, FaCheck} from "react-icons/fa";





const NavBar = () => {

    const style = {
        borderBottomStyle : 'solid',
        borderBottomColor : '#3EB489',
        borderBottomWidth : '3px',
        backgroundColor  : 'whitesmoke'
    }


    const location = useLocation();

    return(
        <div>
            {location.pathname == "/"
                ?
                <Nav fill variant="tabs" className="clickEvent">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/koreaFood" className="koreaFood">한식</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/japanFood" id="japanFood">일식</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/chinaFood" id="chinaFood">중식</Nav.Link>
                    </Nav.Item>
                </Nav>
                :
                location.pathname == "/koreaFood"
                ?
                    <Nav fill variant="tabs">
                        <NavItem>
                            <Nav.Link as={Link} to="/" id="koreaFood">
                                <FaAngleLeft/>
                            </Nav.Link>
                        </NavItem>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/koreaFood" id="koreaFood" style={style}><FaCheck color="#3EB489"/> 한식</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/japanFood" id="japanFood">일식</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/chinaFood" id="chinaFood">중식</Nav.Link>
                        </Nav.Item>
                    </Nav>
                 :
                 location.pathname == "/japanFood"
                 ?
                     <Nav fill variant="tabs">
                         <NavItem>
                             <Nav.Link as={Link} to="/" id="koreaFood">
                                 <FaAngleLeft/>
                             </Nav.Link>
                         </NavItem>
                         <Nav.Item>
                             <Nav.Link as={Link} to="/koreaFood" id="koreaFood">한식</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                             <Nav.Link as={Link} to="/japanFood" id="japanFood" style={style}><FaCheck color="#3EB489"/> 일식</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                             <Nav.Link as={Link} to="/chinaFood" id="chinaFood">중식</Nav.Link>
                         </Nav.Item>
                     </Nav>
                  :
                  location.pathname == "/chinaFood"
                  ?
                      <Nav fill variant="tabs">
                          <NavItem>
                              <Nav.Link as={Link} to="/" id="koreaFood">
                                  <FaAngleLeft/>
                              </Nav.Link>
                          </NavItem>
                          <Nav.Item>
                              <Nav.Link as={Link} to="/koreaFood" id="koreaFood">한식</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link as={Link} to="/japanFood" id="japanFood">일식</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link as={Link} to="/chinaFood" id="chinaFood" style={style}><FaCheck color="#3EB489"/> 중식</Nav.Link>
                          </Nav.Item>
                      </Nav>
                   :
                      <Nav fill variant="tabs" className="clickEvent">
                          <Nav.Item>
                              <Nav.Link as={Link} to="/koreaFood" className="koreaFood">한식</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link as={Link} to="/japanFood" id="japanFood">일식</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link as={Link} to="/chinaFood" id="chinaFood">중식</Nav.Link>
                          </Nav.Item>
                      </Nav>

            }

        </div>

    );
}

export default NavBar;

