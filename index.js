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
        document.querySelector("h2").innerText= "🎉Player 1 🏆 wins🎉";
    }
    else if(randomNum1==randomNum2)
    {
        document.querySelector("h2").innerText= "🎉Draw!🏆 🎉"
    }
    else{
        document.querySelector("h2").innerText= "🎉Player 2 🏆 wins🎉";
    }




    }
   



