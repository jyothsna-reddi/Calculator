
var btn1 = document.getElementById("item-1");
var btn2 = document.getElementById("item-2");

btn2.innerText = "0";
btn1.innerText = 0;
btn1.style.fontSize = "45px";
btn1.style.fontWeight = "bold";
var opr1 = [0,0];
var opr2 = [0,0];
var c =0;
var res = [0,0];
var result = 0;
var operator = [" ", " "];

function setvalues(btnvalue){
  //console.log(Number(btnvalue))
  btntext =  btn1.innerText;
  if(btnvalue == "AC"){
    opr1 = [0,0];
    opr2 =  [0,0];
    res =  [0,0];
    operator = [" ", " "];
    console.log(opr1[0],opr1[1],opr2[0],opr2[1],operator[0],operator[1])
    btn1.innerText = 0;
    btn2.innerText = 0;
  }
  else if(btnvalue == "+/-"){

  }
  else if(btnvalue == "." ){

  }
  else if(btnvalue == "="){
    btn2.style.fontSize="30px";
    btn2.style.fontWeight="600";
    opr1 = 0;
    opr2 = 0;
    res = 0;
    btn1.innerText = " ";
    operator = " ";
}
  else if(btnvalue == "%" || btnvalue == "/" || btnvalue == "+" || btnvalue == "-" || btnvalue == "*" ){
    if(c==0){
      operator[0] = operator[1];
      operator[1] = " ";
      c=1;
    }
   
    //console.log(opr1[0],opr1[1],opr2[0],opr2[1],operator[0],operator[1])
    if(operator[1] != " "){
      btntext = (btntext.slice(0, -1));   
    }
    else{
      opr2[0]=opr2[1];
      opr2[1] = 0;
      opr1[0] = opr1[1]
      
   //   console.log("opertor entered else",opr1)
      // opr1[1] = res;  
    }
    if(result==1){
      opr1[1] = res[1];
      console.log("opertor entered")
    }
    operator[1] = btnvalue;
    //opr1[1] = res[1];
    btn1.innerText = btntext+operator[1];
    console.log(opr1[0],opr1[1],opr2[0],opr2[1],operator[0],operator[1]) 
  }
  else {
    c=0;
    if(operator[1] == " "){
      if(opr1[1]==0){
        btntext = (btntext.slice(0, -1));
      }
      btn2.style.fontSize="20px";
      btn2.style.fontWeight="400";
    //  opr1[0] = opr1[1];
      opr1[1] = eval(opr1[1]*10 + Number(btnvalue));
      btn2.innerText = opr1[1];
     console.log(opr1[0],opr1[1],opr2[0],opr2[1],operator[0],operator[1])
      btn1.innerText =  btntext + btnvalue;

    }
    else{
      opr2[1]= eval(opr2[1]*10 +Number(btnvalue));
     // console.log(opr1,opr2,operator);
      btn1.innerText =  btn1.innerText + btnvalue;
      
      console.log(opr1[0],opr1[1],opr2[0],opr2[1],operator[0],operator[1])
      if(((operator[1] == "/" || operator[1] =="*") && operator[0] != " ")|| (operator[1] == "+" && operator[1] =="-")){
        console.log((operator[1] == "*"))
       
        res[1] = eval(opr1[0]+" "+operator[0]+ " "+ opr2[0]+" "+operator[1]+ " "+opr2[1]);
      }
      // else if(){

      // }
      else{
        res[1] = eval(opr1[1] +" "+ operator[1] + " " + opr2[1]);
      }
      
      result = 1; 
      btn2.innerText =  res[1];
    }
    // if(operator != " "){

    // }
  }
 
}
let btn_div = document.getElementsByClassName("grid-item");
console.log(btn_div);
function tocallbtnclick() {
    for(values of btn_div){
        actionclick(values)
    }
}
function actionclick(btn){
    btn.addEventListener("click", function(e){
      let btnvalue = (btn.firstElementChild.innerHTML);
      setvalues(btnvalue);
    })
}
tocallbtnclick();