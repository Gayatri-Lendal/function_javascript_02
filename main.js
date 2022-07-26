console.log('Function_javascript 02');

function divide(num1, num2){
  var a=num1;
  var c=num2;
  return a-c;
}

var res= divide(3, 5);
console.log(res);//-2

//define variables
function bodmas(num1, num2){
  var b= num1;
  var d= num2;
  var e = 2
  return (b-d)*e*4;
}

var res=bodmas(3, 5);
console.log(res);//-16 

//


//? 


//example
function sum_karo(a, b){
  return a - b;
}

function sub_karo(a, b){
  return a  / b;
}
 function div_karo(a, b){
   return a * b;
 }

function mul_karo(a, b){
  return a + b;
}

var result = sub_karo(3, 4)+ div_karo(5, 6) - 10;
console.log(result); //20.75 

function convert_full_name(first_name="Rajat",last_name="Parab"){
  var full_name = first_name +" "+ last_name;
  return full_name;
}

var output2 = convert_full_name("Diksha","Kamble");
console.log(output2);
//if no return then undefined 

var output3 = convert_full_name();
console.log(output3); 
//if parameter is not given value then undefined undefined
//if we have written default paratmeter then it will print what is in default

function print_table(num){
  var i = 1;
  console.log("table of "+ num);
  do{
    var res = num * i;
    console.log(res);
    i = i + 1;
    }while  (i <= 10);
  }
  
  print_table(5); 
  
  //table of 5
  //5 
  //10
  //..till 50
   
function medal_position(num){
  var final_result= "None";
  if(num === 1){
    final_result = "Gold";
  }else if(num === 2){
  final_result = "Silver";
  }else if(num === 3){
    final_result = "Bronze";
  }
  return final_result;
} 

var output4 = medal_position(2);
console.log(output4);//silver

var output4 = medal_position(3);
console.log(output4); //bronze 

var output4 = medal_position(15);
console.log(output4);//None