let arrayPattern = []

function pattern(a,b,arr){
        let one = arr[0];
        let two = arr[1];
        var add = two-one;
        var mult = two/one;

    if(arr.length === 1){
        return null;
    }
    else{
         arr.splice(0,1)
        let notification =    ("new array: " + arr  + "<br/>" + "test cases: "+arr[0] + "," + arr[1]);
     
        if(arr[0]+add===arr[1]){

                if(arr[0]>arr[1]){
                    return ("<br/>"+(notification + "<br/>"+"subtraction pattern, value: "+ add)+"<br/>"+pattern(a,b,arr)+"<br/>")
                } 
                else if(arr[0]<arr[1]){
                    return ("<br/>"+ (notification + "<br/>"+"additional pattern,value: "+ add)+"<br/>"+pattern(a,b,arr)+"<br/>")
                }

                return pattern(a,b,arr)
        }//addiition and subtraction verification

        else if(arr[0]*mult===arr[1]){
            if(arr[0]>arr[1]){
                return("<br/>"+ notification + "<br/>"+"division pattern observed ")+"<br/>"+pattern(a,b,arr)+"<br/>"

              return(notification + "<br/>"+"division pattern observed ")+gg(a,b,arr)+"<br/>"

            } 
            else if(arr[0]<arr[1]){
              return "<br/>"+(notification + "<br/>"+"multiplication pattern, value: "+ mult)+"<br/>"+pattern(a,b,arr)+"<br/>"
            }
            return pattern(a,b,arr)
        }

        else if(arr[0]===Math.sqrt(arr[1])){
                if(arr[0]<arr[1]){
                return "<br/>"+(notification + "<br/>"+"power series pattern observed" + "<br/>") + pattern(a,b,arr)+ "<br/>"
                
                }
            return pattern(a,b,arr)
        }

         else{
            return "<br/>"+(notification + "<br/>"+"discontinuous pattern observed: program terminated !")
        }
       
    }// multiplication and division pattern 
}   //end of function (pattern)

 

  function submit(){     //submits the userinput and adds it to the array
    let numbers = document.querySelector(".numbers");
   
      var userInput = prompt("your number :");
      var userIntValue = parseInt(userInput)
      if(Number.isInteger(userIntValue)){

          arrayPattern.push(userIntValue)

          arrs.push(userIntValue)

      }
      console.log(arrayPattern)
      numbers.innerHTML = arrayPattern
  }
 
  function activate(){  //this function triggers the Pattern functionality on the UI
   let result = document.querySelector(".result")   
  
   let answer = pattern(arrayPattern[0],arrayPattern[1],arrayPattern); 
    console.log(pattern(arrayPattern[0],arrayPattern[1],arrayPattern));
   result.innerHTML = answer
  }

 function edit(){ //REMOVE AN INPUT
    let numbers = document.querySelector(".numbers");
      arrayPattern.pop()
      console.log(arrayPattern)
      numbers.innerHTML = arrayPattern
  }

  


//

//establish variables
//perform a recursive algorithm containing conditional statement to verify pattern
