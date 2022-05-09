import React from "react";
import Auth from "./Auth";

const REST_API_KEY = "[e6a2248355fd75d6a50c5da6e400ec16]";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=e6a2248355fd75d6a50c5da6e400ec16&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code';

const Login = () => {
    return(
        <>
            <h1><a href={KAKAO_AUTH_URL}>kakao login</a></h1>
            <Auth/>
        </>
    );
}
export default Login;