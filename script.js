//1)display number in text box
   function displayNumber(num){
    result.value+=num
   }

//2) Clear text box
function clearbox(){
   result.value=""
}

//3) Evaluate expression
function evaluateExp(){
   // //method1
   // exp=result.value; //exp=1+2
   // output= eval(exp)  // eval is function, output=(1+2)=3
   // result.value=output;
   //Method2
   result.value=eval(result.value)

}
//4) Removal of item from text box
function removallastitem() {
   currentItem=result.value
   result.value=currentItem.slice(0,-1)// slice method is used to slice last value
   
}