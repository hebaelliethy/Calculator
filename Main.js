<!Doctype html>  
<html>  
<head>  
<title>Javascript Calculator</title>  
<!-- CSS Code -->  
<style>  
 body {  
background-color:#ffffff;  
margin: auto;  
  
} 
#calbody{  
 background: #097C9B;  
 border: 10px solid #ff0;  
 padding: 10px;  
 margin-left: 20px;  
 max-width: 26.2em;  
   
}  
h1{  
 text-align: left;  
 font-size: 40px;  
 color: #097C9B;  
   
}  
  
#lcd{  
 text-align: left;  
 width: 23em;  
 height: 40px;  
 font-size: 18px;  
   
}  
  
#lcdu{  
 color: grey;  
 text-align: left;  
 width: 27.4em;  
 height: 40px;  
 font-size: 15px;  
   
}  
  
.normalbutton{  
 background-color: #fff;  
 width: 80px;  
 height: 60px;  
 font-size: 20px;  
 border: 1px solid #097C9B;  
   
  
}  
  
.normalbutton:hover{  
  background-color: #509CA9;   
    
 }  
 
 .nnormalbutton{  
 background-color: red;  
 width: 80px;  
 height: 60px;  
 font-size: 20px;  
 border: 1px solid #097C9B;     
  
}   
  
</style>  
</head>  
<h1>  
Javascript Calculator</h1>  
<body>  
<div id="calbody">  
<form name="lcdform">  
<input id="lcdu" name="lcdsu" type="text" value="" />  
<input id="lcd" name="lcds" type="text" value="0" />  
</form>  
<div id="calbutton">  
<button class="normalbutton" onclick="number(1);">1</button>  
<button class="normalbutton" onclick="number(2);">2</button>  
<button class="normalbutton" onclick="number(3);">3</button>  
<button class="normalbutton" onclick="operationplus();">+</button>  
<button class="normalbutton"  onclick="operationraistop();">^</button>  
  
  
<button class="normalbutton" onclick="number(4);">4</button>  
<button class="normalbutton" onclick="number(5);">5</button>  
<button class="normalbutton" onclick="number(6);">6</button>  
<button class="normalbutton" onclick="operationmult();">*</button>  
<button class="normalbutton" onclick="sqrots();">Sqrt()</button>  
  
  
<button class="normalbutton" onclick="number(7);">7</button>  
<button class="normalbutton" onclick="number(8);">8</button>  
<button class="normalbutton" onclick="number(9);">9</button>  
<button class="normalbutton" onclick="operationminus();">-</button>  
<button class="normalbutton" onclick="clr();">C</button>  
  
  
<button class="normalbutton" onclick="operationperc();">%</button>  
<button class="normalbutton" onclick="number(0);">0</button>  
<button class="normalbutton" onclick="numdobuzero();">00</button>  
<button class="normalbutton" onclick="operationdivid();">/</button>  
<button class="nnormalbutton" onclick="equalsto();">=</button>  
</div>  
</div>  
<!-- Javascript code -->  
<script>  
  
var firstnumber;  
var secondnumber;  
var result;  
var operations;  
 
 function number(number){
 if (document.lcdform.lcds.value == "0")
  document.lcdform.lcds.value = number;  
   else 
   document.lcdform.lcds.value += number; 
 }
  
function clr(){  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = "";  
 return;  
}  
  
function operationplus(){  
   
 operation = "+";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
 //alert(firstnumber);  
    
}  
function operationmult(){  
   
 operation = "*";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function operationminus(){  
   
 operation = "-";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function operationdivid(){  
   
 operation = "/";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function operationperc(){  
   
 operation = "%";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
   
}  



function operationraistop(){  
   
 operation = "^";  
 firstnumber = parseInt(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
    
}  

function equalsto(){  
   
 secondnumber = parseInt(document.lcdform.lcds.value);  
   
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
 }  
 else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
    
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;  
     
 }  
 else if (operation == "%"){  
    
  if (document.lcdform.lcds.value == "0"){  
    
  result = firstnumber / 100;  
  document.lcdform.lcdsu.value = firstnumber + operation + "100";  
  }  
  else if (document.lcdform.lcds.value != "0")  {  
   result = firstnumber / secondnumber * 100;  
   document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + "*100 = " + result;  
  }  
 }  
 else if (operation == "^"){  
 
   result=Math.pow(firstnumber, secondnumber); 
   
 // for (var i = 0; i < secondnumber; i++){  
     
  // result  = firstnumber * i;  
  //}  
    
    
 }  
 document.lcdform.lcds.value ="";  
 document.lcdform.lcds.value = result.toString();  
 document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
 return;  
   
}  
  
function sqrots(){  
 firstnumber = document.lcdform.lcds.value;  
 result = Math.sqrt(parseInt(document.lcdform.lcds.value));  
 document.lcdform.lcds.value = result;  
 document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;  
   
}  
  

  
</script>  
</body>  
</html>  