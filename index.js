// for dice 1 .
let player_1 = Math.floor(Math.random() * 6) + 1;

let diceImage1 = "images/dice" + player_1 + ".png";
let diceImagePlayer_1 = diceImage1;

let image1 = document.getElementById("img1");
image1.setAttribute("src", diceImagePlayer_1);

// for dice 2 .
let player_2 = Math.floor(Math.random() * 6) + 1; 

let diceImage2 = "images/dice" + player_2 + ".png";
let diceImagePlayer_2 = diceImage2;

let image2 = document.getElementById("img2");
image2.setAttribute("src", diceImagePlayer_2);


if(player_1 > player_2){
    document.getElementById("title").innerHTML = "Player 1 Wins !!";
}else if (player_1 < player_2){
    document.getElementById("title").innerHTML = "Player 2 Wins !!";
}else{
    document.getElementById("title").innerHTML = " Game Draw !!";
}