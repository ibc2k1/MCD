import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {cookies} from "react-cookie";

export default function PrintOrderList(){
    return(
        <>
        
        <center><h1>訂單完成!</h1></center>
        <center><h2>點餐明細: </h2></center>
        
        <Link to="/">
            <center><button className="finishbt">完成</button></center>
        </Link>
        </>
    );
}