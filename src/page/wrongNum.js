import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function WrongNum(){
    return(
        <>
        
        <center><h1>錯誤訊息 Error!</h1></center>
        
        <center><h2>輸入之信用卡卡號為不正確之號碼，請重新輸入。</h2></center>
        <center><h3>The credit card number is not existd, please enter again.</h3></center>
        
        <Link to="/inputCardNum">
            <center><button className="enterAgainbt">重新輸入</button></center>
        </Link>
    </>
    );
}