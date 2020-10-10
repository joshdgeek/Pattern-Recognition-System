let arrs = []
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
        let notification =    "new array: " + arr  + "<br/>" + "test cases: "+arr[0] + "," + arr[1];
     
        if(arr[0]+add===arr[1]){

                if(arr[0]>arr[1]){
                    return ("<br/>"+(notification + "<br/>"+"subtraction pattern, value: "+ add)+"<br/>"+gg(a,b,arr)+"<br/>")
                } 
                else if(arr[0]<arr[1]){
                    return ("<br/>"+ (notification + "<br/>"+"additional pattern,value: "+ add)+"<br/>"+gg(a,b,arr)+"<br/>")
                }

                return pattern(a,b,arr)
        }//addiition and subtraction verification

        else if(arr[0]*mult===arr[1]){
            if(arr[0]>arr[1]){
              return(notification + "<br/>"+"division pattern observed ")+gg(a,b,arr)+"<br/>"
            } 
            else if(arr[0]<arr[1]){
              return "<br/>"+(notification + "<br/>"+"multiplication pattern, value: "+ mult)+"<br/>"+gg(a,b,arr)+"<br/>"
            }
            return pattern(a,b,arr)
        }

        else if(arr[0]===Math.sqrt(arr[1])){
                if(arr[0]<arr[1]){
                return "<br/>"+(notification + "<br/>"+"power series pattern observed" + "<br/>") + gg(a,b,arr)+ "<br/>"
                
                }
            return pattern(a,b,arr)
        }

         else{
            return "<br/>"+(notification + "<br/>"+"discontinuous pattern observed: program terminated !")
        }
       
    }// multiplication and division pattern 
}   

 

  function submit(){
    let numbers = document.querySelector(".numbers");
   
      var userInput = prompt("your number :");
      var userIntValue = parseInt(userInput)
      if(Number.isInteger(userIntValue)){
          arrs.push(userIntValue)
      }
      console.log(arrs)
      numbers.innerHTML = arrs
  }
 
  function activate(){
   let result = document.querySelector(".result")   
  
   let answer = gg(arrs[0],arrs[1],arrs)
    console.log(gg(arrs[0],arrs[1],arrs));
   result.innerHTML = answer
  }

 function edit(){
    let numbers = document.querySelector(".numbers");
      arrs.pop()
      console.log(arrs)
      numbers.innerHTML = arrs
  }

  


//

//establish variables
//perform a recursive algorithm containing conditional statement to verify pattern
