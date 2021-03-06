import React, { useState } from 'react'
import { Link, useLinkClickHandler } from "react-router-dom";
import {Cookies} from "react-cookie";
import "./printOrderList.css"

var da = {
    order_id: "ID",
    place: 'place',
    order_list: [
        {
            f_name: "this.state.food.f_name",
            f_customize: { sauce: "this.state.sauceCustomize", lectture: "this.state.lettuceCustomize" },
            d_name: "this.state.drink",
            d_customize: "this.state.drinkCustomize",
            d_price: "this.state.drinkPrice",
            s_name: " this.state.sid",
            s_customize: "this.state.sideCustomize",
            s_price: " this.state.sidePrice",
            a_name: "a_name",
            totalPrice: " this.state.totalPrice"
        },
        {
            f_name: "this.state.food.f_name",
            f_customize: { sauce: "this.state.sauceCustomize", lectture: "this.state.lettuceCustomize" },
            d_name: "this.state.drink",
            d_customize: "this.state.drinkCustomize",
            d_price: "this.state.drinkPrice",
            s_name: "this.state.side",
            s_customize: "this.state.sideCustomize",
            s_price: "this.state.sidePrice",
            a_name: "a_name",
            totalPrice: "this.state.totalPrice"
        }
    ],
    total: 0,
}

function getRandomInt(max) { //create cookie id
    return Math.floor(Math.random() * max);
}

function hangleClick() {

    const Name  = "111";
    const value = da //cookie value
    const cookies = new Cookies();

    try {
        cookies.set(`${Name}`, JSON.stringify(value),{path:'/'});
        
        console.log("create a cookieID", Name);
    }
    catch (err) {
        console.log(err);
    }
}

function ReadCookie(Name) {    
    const cookies = new Cookies();
    try{
        var cookieDataTemp=JSON.stringify(cookies.get(`${Name}`));
        var cookieData=JSON.parse(cookieDataTemp);
        console.log("cookies", cookieData);
        return cookieData;
    }
    catch(err){
        console.log(err);   
    }   
}

export default function PrintOrderList(props){

    const Name = props.Name;
    console.log("printOrderList.js => ",Name);
    var cookieData = ReadCookie(Name);

    return(
        <>
        <center><h1>????????????!</h1></center>
        <center><h2>????????????(dining place): {cookieData.place}</h2></center>
        <center><h2>????????????: </h2></center>
        
        {cookieData.order_list.map((item) => (
            <div className="item"> 
                <h3>??????(main meal): {item.a_name}</h3>
                <h3>({item.f_customize.sauce}, {item.f_customize.lectture})</h3>
                <h3>??????(drink): {item.d_name}</h3>
                <h3>({item.d_customize})</h3>
                <h3>??????(side): {item.s_name}</h3>
                <h3>({item.s_customize})</h3>
                <h3>??????(add discount product): {item.add}</h3>
                <h3>??????(Price): ${item.totalPrice}</h3>
                <h3>-------------------------------</h3>
            </div>
        ))}
        <center><h2>?????????(totalPrice): ${cookieData.total}</h2></center>
        <Link to="/">
            <center><button className="finishbt">??????</button></center>
        </Link>
        <h2>&nbsp;</h2>
        </>
        
    );
}