function rollDice(){
    var randomNum1 = Math.floor((Math.random()*6)+1);
    var randomImage1= "images/dice"+randomNum1+".png";

    var img1=document.querySelectorAll("img")[0];
     img1.setAttribute("src", randomImage1);  


     var randomNum2 = Math.floor((Math.random()*6)+1);
     var randomImage2= "images/dice"+randomNum2+".png";

     var img2=document.querySelectorAll("img")[1];
     img2.setAttribute("src", randomImage2);


     if(randomNum1>randomNum2){
        document.querySelector("h2").innerText= "๐Player 1 ๐ wins๐";
    }
    else if(randomNum1==randomNum2)
    {
        document.querySelector("h2").innerText= "๐Draw!๐ ๐"
    }
    else{
        document.querySelector("h2").innerText= "๐Player 2 ๐ wins๐";
    }




    }
   



