import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";
const Signup = () => {
    const [text,setText] = useState("");
    const [password,setPassword] = useState("");

    const style = {
        textAlign:'center',
        marginTop:"30px"
    }
    //아이디 정규식 (한글, 특수문자, 띄어쓰기)
    const regId =  /[^?a-zA-Z0-9/]/
    //비밀번호 정규식 ( 8 ~ 10자 영문, 숫자 조합)
    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
        return (
            <>
                <div style={style}>
                    <br/>
                    <br/>
                    <br/>
                <h1>회원가입</h1>
                </div>
                <br/>
                <br/>
                <br/>
                <Form.Label><b>아이디를 입력해주세요 {text != ""  && !regId.exec(text) ? <FaCheck color="#3EB489"/> : "" }</b></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="특수문자를 제외한 영문 혹은 숫자로만 입력해주세요"
                    onChange={(e)=>{setText(e.target.value)}}
                />
                <h5 style={{color:"green" ,fontSize:"15px"}}>{text != "" && !regId.exec(text)  ? "["+text+"]"+"는 사용가능합니다." : <h5 style={{fontSize:"15px", color:"red"}}>아이디 형식이 맞지않습니다.</h5> }</h5>
                <Form.Label><b>비밀번호를 입력해주세요 {regPw.exec(password) ? <FaCheck color="#3EB489"/> : ""}</b></Form.Label>
                <Form.Control
                    type="password"
                    placeholder="특수문자를 제외한 8 ~ 10자 영문, 숫자 조합으로 입력해주세요"
                    onChange={(e) =>{setPassword(e.target.value)}}
                />
                {password !="" && regPw.exec(password) ? <h5 style={{fontSize:"15px" ,color:"green"}}> 사용가능한 비밀번호입니다.</h5> : <h5 style={{fontSize:"15px", color:"red"}}>비밀번호 형식이 맞지않습니다</h5> }


            </>
        );
}
export default Signup;