/*type of string


/*const myvariable ="mathematics";
//the string lenght//
console.log(myvariable.length);
//character with indxe nomber//
console.log(myvariable.charAt(0));
//STRING METHOD
//the first index number slice the second index number
console.log(myvariable.slice(0, 5));
//the includes methode
//this method comfirms if the highlited element is include in the above declared variable
console.log(myvariable.includes("mat"));
//the spliot mthod
//split with emty quatation split all the char 
console.log(myvariable.split(""));
//it splitthe given variables
console.log(myvariable, "Bright,Abel".split(","));

*/
// Numbers
//an integer is a whole number.

// A number with a decimal point is a float which references the "floating point"
 

 
//this return false because they are not the same
//console.log(mynumber === myString);
// but this return true because they look alike
//console.log(mynumber == myString);

//console.log(myString + 3);//it return 333 because it lomps 3 to 33 as a string

//console.log(Number(myString)+ 3); // the Number function overide the string to add it up as number and in this case if you compare the myString to my number it becomes true
//console.log(Number( myString) === mynumber);// Also if you do the oposite it returns false, like comparing the mynumber to myString. why--- 

//In javascript 0 = false while 1 = true which is boolean
//console.log(Number(false));
//const mynumber =33;
//const myfloat = 33.0;


//MATH METHOD AND PROPERTIES
//this method returns the property of PI
/*
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
//the number will be rounded up
console.log(Math.ceil(Math.PI));
//the number will be rounded down
console.log(Math.floor(Math.PI));
*/
//this is the power methode 2x2

//console.log(Math.pow(2,2));
/*
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);
console.log(Math.floor(Math.random() * 10) + myString);


const myString = "bright";
console.log(myString.charAt(Math.floor(Math.random()* myString.length)));
console.log(myString.charAt(Math.floor(Math.random()* myString.length)));
console.log(myString.charAt(Math.floor(Math.random()*2)));
console.log(myString.charAt(Math.floor(Math.random()*3)));
console.log(myString.charAt(Math.floor(Math.random()*4)));
console.log(myString.charAt(Math.floor(Math.random()*5)));
*/
//--------------------------------------------------------
//IF STATEMENT
/*
if (score >=80){
    grade = "A";
}else if(score >=79 )
    {
    grade ="your score is low";
}else{
    grade = "you fail the cours";
}
    


   //NEXTED IF STATEMENT
   if (PlayerOne === Computer){
    //tie game
    if(commputer === "Papper"){
        //computer wins
    }else{
        //player wins
    }
   }else{
    if(computer === "rock"){
     //   computer wins
    }else{
       // player wins
    }
   }*/
//SWITCH STATMENT
//--------------------------------------------------------

/*switch (Math.floor(Math.random() * 3 + 1)){
    //TOSTING A GAL WITH SWITCH STATEMENT 
    case 1:
       console.log("afa Babe");
       break;

    case 2:
        console.log("7k ");
        break ;

    case 3:
        console.log("afa 5k come boad");
        break;
        
        default:
            console.log("nothing come boad");

    
}

let playerOne = "rock";
let computer = "";

// IF STATEMENT WITH SWITCH STATEMENT---------------------
switch(playerOne){
    case computer:
        console.log("tie game");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("computer wins");
        }else{
            console.log("playerOne wins");
        }
        break;
        case "paper":
            if(computer === "scissors"){
                console.log("compuer wins");
            }else{
                console.log("playerOne wins");
            }
            break;
            default:
                if(computer === "rock"){
                    console.log("compuer wins");
                }else{
                    console.log("playerOne wins");
                }
        }
--------------------------------------------------------------                
THIS IS CONDITIONALS: TERNARY OPRATOR
-------------------------------------------------------------- 
let abaa     = " Garry and Soup";
let Creditor =  false;
let Waiter = Creditor ? "sorry no food today come tomorrow " 
:abaa 
? "yes, we have  "+ "" + abaa
:"sorry, no food today.";

let testScore   = 67;
let myGrade = 
   testScore > 89 
     ? "A" 
     :testScore >79 
     ? "B" 
     : testScore > 69 
     ? "C" 
     : testScore > 59 
     ?"D" 
     : "F";
console.log("my test score is "+""+ myGrade);

let computer = "out";
let player   = "in";
let outcome = computer === player 
  ? "tie game"
  : player ==="rock" && computer === "paper" 
  ? "computer wins" 
  : player ==="out" && computer ==="in" 
  ? "computer wins"
  : computer ==="out " && player ==="in" 
  ? "player wins"
  : computer === "rock" && player ==="rock"?
  "tie game"
  :"Player wins";
console.log(outcome);
*/
//TYPES OF POP UP------------------------------------
//Boolean type of pop up
//----------------------------------------------------------
 //let myBoolean = confirm("ok === true\nCancel === false");
 //console.log(myBoolean);


 //INPUT AND PROMPT
/*
 let name = prompt("please enter your name here");
 if(name.length){

    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());

 }else{
    console.log("you dond't have a name");
 }*/

//Putting all together
//------------------------------------------------------------
    /*
let PlayGame  = confirm("shall we play game?");
if (PlayGame){
    let PlayChiorce = prompt("enter one of your chiorce. rocky, football or tenis");

   if(PlayChiorce){
     alert("well'come to the world of "+""+PlayChiorce);
     let PlayerOne = PlayChiorce.trim().toLowerCase();
     if(PlayerOne ==="rubby" ||
        PlayerOne === "football" || 
        PlayerOne === "tenis"
        ){
        let ComputerChioce = Math.floor(Math.random()*3+1);
        let computer = ComputerChioce === 1 ? "rubby" 
        : ComputerChioce === 2 ? "football" 
        : "tenis";

        let result =
        PlayerOne === computer 
        ? "tie Game" 
        : PlayerOne === "rubby" && computer === "football"
        ? "playerOne: "+PlayerOne +""+"\ncomputer:"+computer+""+"\ncomputer wins:"

        : PlayerOne === "football" && computer === "tenis"
        ? "playerOne: "+PlayerOne +""+"\ncomputer:"+computer+""+"\ncomputer wins:"

        : PlayerOne === "tenis" && computer === "rubby"
        ? "playerOne: "+PlayerOne +""+"\ncomputer:"+computer+""+"\ncomputer wins:"

        :"playerOne: "+PlayerOne +""+"\ncomputer:"+computer+""+"\nplayerOne wins:";
        alert(result);
        let playAgain = confirm("Play Again?");
        playAgain ? location.reload() : alert("ok, thanks for playing again");
     }else{
        alert("you didn't enter football, tenis or rocky");
     }
   }else{
     alert("Maybe you didn't wanna play this time");
   }

}else{
    alert("maybe nxt time");
} **/

    //while loops

/**    
--------------------------------------------------------------
while( Dnumber < 50){
    Dnumber +=2;
    console.log(Dnumber);
}
 

//do while loop
--------------------------------------------------------------
do {
    console.log(Dnumber);

}while(Dnumber<50);*/
/**   FOR LOOP
------------------------------------------------------------
 
for(let i =0; i <= 10;){
    console.log(i);
    i++;
}
*/
/**
-------------------------------------------------------------
//Playing with loop
=============================================================
let name = "Bright";
for(let i = 0; i <= name.length; i++){
    console.log(name.charAt(i));
}
// Do not create an infinit loop
 */
/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
Fuctions
Methods are built in functions
------------------------------------------------------------
Fuctions declaration syntax
-------------------------------

function sum(num1, num2){

    if(num1 === undefined){
        return "num1 can't be empty";
    }else if(num2 === undefined){
        return "num2 can't be empty";
    }else{
        return num1 + num2;
    }
    
  
   
}
console.log(sum(2,6));

//Working with functions
==================================================
function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("brihhtabel42@gmail.com"))

//function to convert your name first letter to Upper case
------------------------------------------------------------
const bigletter = (name) =>{
return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(bigletter("bright"));
------------------------------------------------------------
//Arrays 

-----------------------------


const myAray = [];

myAray[0] = "Bright";
myAray[1] = 33;
myAray[2] = true;
//myAray.unshift(9159660231);//unshift to ad to nthe beggining
//myAray.push("city");//push to add to the ending

//myAray.splice(2, 2);//splice to delet without getting 
// undefined data
console.log(myAray);
myAray.splice(1, 1, 91);


//Aray with slice method----------------------------------
const myArray = ["A", "B", "C", "D", "E", "F"];
const MySecondArray = ["X","Y","z"];
//const together = myArray.concat(MySecondArray);
//const newArray = myArray.slice(2, 5);
//Join method
//const JoinArray = myArray.join();

//using the spread oprator-----------------------------------
//const together = [...myArray, ...MySecondArray];
/---------------------------------------------------------
//Joining the two arraay in new array 
const together = [myArray,MySecondArray];
//-----------------------------------------------------------
console.log(together);

*/
//Object-----------------------------------------------------
//Key-value pairs in curle brace-----------------------------
const myobj = {name: "Bright"};
console.log(myobj);

