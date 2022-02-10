"use strict"
function ageCalculator() {
    var userinput = document.getElementById("date").value;
    var dob = new Date(userinput);
  
  
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
   
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
 
    //extract year from date    
    var year = age_dt.getUTCFullYear();
 
    //now calculate the age of the user
    var ageB= Math.abs(year - 1970);
 
   
    var d1 = document.getElementById('dob').value;
  var m1 = document.getElementById('month').value;
  var y1 = document.getElementById('year').value;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
  	d2 = d2 + month[m2 - 1];
  	m2 = m2 - 1;
  }
  if(m1 > m2){
  	m2 = m2 + 12;
  	y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

var age = ageB-y;
return age;
    }

let sex = [];
   
        const addGender = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
         
            let gender = {
                age: ageCalculator(),
         
                month: document.getElementById('month').value
            }
           sex.push(gender);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {sex} );
           
console.log(gender.age);
console.log(gender.month);
            //saving to localStorage
            localStorage.setItem('MygenderList', JSON.stringify(sex) );
        
        let a = gender.age;
   
        let b = gender.month;
        
      
   
        let i=0;
    
        let jan = [0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0];
        let feb = [1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1];
        let mar = [0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1];
        let apr = [1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0];
        let may = [1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0];
        let jun = [1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0];
        let jul = [1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1];
        let aug = [1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0];
        let sep = [1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0];
        let oct = [1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0];
        let nov = [1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1];
        let dec = [1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1];
            
      
    
        i = a-18;
    
        let result = 0;
     
        switch(b){
            case 1:
                result =jan[i];
                break;

                case 2:
                    result =feb[i];
                    break;

                    case 3:
                        result =mar[i];
                        break;

                        case 4:
                            result =apr[i];
                            break;

                            case 5:
                                result =may[i];
                                break;

                                case 6:
                                    result =jun[i];
                                    break;

                                    case 7:
                                        result =jul[i];
                                        break;

                                        case 8:
                                            result =aug[i];
                                            break;

                                            case 9:
                                                result =sep[i];
                                                break;

                                                case 10:
                                                    result =oct[i];
                                                    break;

                                                    case 11:
                                                        result =nov[i];
                                                        break;

                                                        case 12:
                                                            result =dec[i];
                                                            break;
        }
        if(result == 0)
        { const myElement = document.getElementById("myForm");
        myElement.style.display ="none";
        document.body.style.background ="#fa98d3 url('../images/babygirl.gif') no-repeat center 120px";
         }
      else
  {
    const myElement1 = document.getElementById("myForm");
    myElement1.style.display="none";
    document.body.style.background ="#b4e9f0 url('../images/baby_boy1.gif') no-repeat center 120px"  ;

  }
        
    }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addGender);
        });
