import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";

const AgreementPaper = () => {
    const [text,setText] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    //아이디 정규식 (한글, 특수문자, 띄어쓰기)
    const regId =  /[^?a-zA-Z0-9/]/
    //비밀번호 정규식 ( 8 ~ 10자 영문, 숫자 조합)
    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    //이름 정규식
    const regName = /^[가-힣]{2,4}$/;
    return(
        <>
        <div className="wrap wd668">
            <div className="container">
                <div className="form_txtInput">
                    <h2 className="sub_tit_txt">회원가입</h2>
                    <p className="exTxt">회원가입시 이메일 인증을 반드시 진행하셔야 합니다.</p>
                    <div className="join_form">
                        <table>
                            <colgroup>
                                <col width="30%"/>
                                <col width="auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <th><span>아이디 </span> {text != ""  && !regId.exec(text) ? <FaCheck color="#3EB489"/> : "" }</th>
                                <td><input type="text" placeholder="특수문자를 제외한 영문 혹은 숫자로만 입력해주세요" onChange={(e)=>{setText(e.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><span style={{color:"green" ,fontSize:"15px"}}>{text != "" && !regId.exec(text)  ? "["+text+"]"+"는 사용가능합니다." : <span style={{fontSize:"15px", color:"red"}}>아이디 형식이 맞지않습니다.</span> }</span></td>
                            </tr>
                            <tr>
                                <th><span>이름</span> {name != "" && regName.exec(name) ? <FaCheck color="#3EB489"/> : "" }</th>
                                <td><input type="text" placeholder=""
                                onChange={(e)=>{setName(e.target.value)}}
                                /></td>
                            </tr>
                            <tr>
                                <th><span>비밀번호</span> {regPw.exec(password) ? <FaCheck color="#3EB489"/> : ""}</th>
                                <td><input type="password" placeholder="특수문자를 제외한 8 ~ 10자 영문, 숫자 조합으로 입력해주세요"
                                           onChange={(e) =>{setPassword(e.target.value)}}
                                /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{password !="" && regPw.exec(password) ? <h5 style={{fontSize:"15px" ,color:"green"}}> 사용가능한 비밀번호입니다.</h5> : <h5 style={{fontSize:"15px", color:"red"}}>비밀번호 형식이 맞지않습니다</h5> }</td>
                            </tr>
                            <tr>
                                <th><span>비밀번호 확인</span></th>
                                <td><input type="password" placeholder="비밀번호를 확인하세요"

                                /></td>
                            </tr>
                            <tr>
                                <th><span>휴대폰 번호</span></th>
                                <td><input type="text" placeholder="ID 를 입력하세요."/></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="exform_txt"><span>표시는 필수적으로 입력해주셔야 가입이 가능합니다.</span></div>
                    </div>

                    <div className="agree_wrap">
                        <div className="checkbox_wrap">
                            <input type="checkbox" id="news_letter" name="news_letter" className="agree_chk"/>
                                <label htmlFor="news_letter">[선택]뉴스레터 수신동의</label>
                        </div>
                        <div className="checkbox_wrap mar27">
                            <input type="checkbox" id="marketing" name="marketing" className="agree_chk"/>
                                <label htmlFor="marketing">[선택]마케팅 목적 개인정보 수집 및 이용에 대한 동의</label>
                                <ul className="explan_txt">
                                    <li><span className="red_txt">항목 : 성별, 생년월일</span></li>
                                    <li>고객님께서는 위의 개인정보 및 회원정보 수정 등을 통해 추가로 수집하는 개인정보에<br/>
                                        대해 동의하지 않거나 개인정보를 기재하지 않음으로써 거부하실 수 있습니다.<br/>
                                        다만 이때 회원 대상 서비스가 제한될 수 있습니다.
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="d-grid gap-5">
                <Button variant="primary" size="lg">
                    가입 하기
                </Button>
            </div>
        </>
    );
}
export default AgreementPaper;