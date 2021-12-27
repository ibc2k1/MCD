import React, {useState} from 'react';
import { Link } from "react-router-dom";

var checkans;
var separate = new Array();
var sum=0;

function InputCardNum() {

  const [creditCard, setcreditCard] = useState("");

  function handleClick() {
    console.log("creditcard", creditCard);
    separate = creditCard.split("").map(Number);

    console.log("array", separate);
    check();
    console.log("handleClick", checkans)
  }

  function check(){
    console.log("before", separate);
    for(let i=0;i<16;i++){
      if(i%2===0){
        separate[i]=separate[i]*2;
      }
      else if(i%2===1){
        separate[i]=separate[i]*1;
      }
    }
    console.log("i->", separate);

    for(let i=0;i<16;i++){
      separate[i]=separate[i]/10+separate[i]%10;
    }
    console.log("plus", separate);

    for(let i=0;i<16;i++){
      separate[i]=parseInt(separate[i]);
      sum=sum+separate[i];
    }
    console.log("int", separate);
    //console.log("sum", sum)
    if(sum%10===0){
      checkans=true;
    }
    else if(sum%10 !== 0){
      checkans=false;
    }
    console.log("check", checkans);
  }
  
  function handleChange(e) {
    setcreditCard(e.target.value);
    console.log("handleChange", checkans)
  }

  function checkRight(){
    return(
      <Link to="/printOrderList">
        <button className="finishbt">確認</button>
      </Link>
    )
  }

  function checkWrong(){
    return(
      <Link to="/wrongNum">
        <button  className="finishbt">確認</button>
      </Link>
    )
  }

  return (
    <div className="App">
      <center><h1>請輸入信用卡卡號: </h1></center>
      <center><h2>Please enter the credit card number: </h2></center>
      <input value={creditCard} onChange={handleChange}/>
      
      <Link to={(checkans)?"/printOrderList":"/wrongNum"}>
        <button onClick={handleClick} className="finishbt">確認</button>
      </Link>
      
      
    </div>
  );
}

export default InputCardNum;

/*
<Link to={`/${checkans}`}>
        <button onClick={handleClick} className="finishbt" component={Link} to={`/${checkans}`}>確認</button>
      </Link>
      {checkans?checkRight():checkWrong()}
*/