import React, { useState } from 'react'
import './selectPayMode.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

export default function SelectPayMode(){
    return(
        <>
        
        <center><h1>請選擇付款方式</h1></center>
        <center><h2>Please choose a payment method.</h2></center>

        <div>
        <img className="cashimg" src="https://cdn-icons-png.flaticon.com/512/2488/2488749.png" />
        </div>
        <div>
        <img className="cardimg" src="https://cdn-icons-png.flaticon.com/512/633/633611.png" />
        </div>

        <Link to="/printOrderList">
            <button className="payInCashbt">櫃台結帳</button>
        </Link>
        
        <Link to="/inputCardNum">
            <button className="payWithCardbt">信用卡付款</button>
        </Link>
    </>
    );
}