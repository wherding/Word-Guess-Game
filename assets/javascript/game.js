var words = ["test", "test1", "another test", "one more test", "ok last one"];
var word;
var letters = [];
var spaces= [];
var userInput;
var userGuesses = [];
var numberWrong = 0;
//begin object array
var options = [
    oldFashioned = {  name: "old fashioned",  img:"./assets/img/mmcask.jpg"},
    marg = { name:'margarita', img:'./assets/img/patron.jpeg' },
    mint={name:"mint julep", img:"./assets/img/mintJ.jpg"},
    irish={name:"irish trash can", img:"./assets/img/irish.jpg"},
    stella={name:"stella", img:"./assets/img/stella.png"},
    xx={name:"xx",  img:"./assets/img/xx.jfif"},
    patronShot = {name:"patron shot", img:"./assets/img/patron_shot.jpg"},
    archer={name:"bloody mary",img:"./assets/img/archer.jpg"},
    jager={name:"jagermeister",img:"./assets/img/jager.webp"}
];
//end object array
var index;


window.onload = function load(){
    console.log(options[0])
    console.log(options[1].test2)

   // document.getElementById("test").innerHTML = words;
   index = Math.floor(Math.random() * options.length);
   console.log("this is the value of my index var: "+ index);

    //word = words[Math.floor(Math.random() * words.length)];
    letters = options[index].name.split("");
   // document.getElementById("test").innerHTML = letters;
    console.log(word);
    document.getElementById("hint").src = options[index].img;
  
    letters.forEach(x => {
        spaces.push("_");
    });
    document.getElementById("test").innerHTML = spaces.join(" ");

    //console.log(spaces);
    //console.log(letters);


}

document.onkeydown = function(event){
    userInput = event.key;
    console.log(userInput);
    if (letters.includes(userInput)) {
        var i =0;

        letters.forEach(x => {
          if (x == userInput) {
               spaces[i] = userInput;
               
           }
           i++;
           
           
       });
        //var updateSpace = letters.indexOf(userInput);
       // spaces[updateSpace] = userInput;
        document.getElementById("test").innerHTML = spaces.join(" ");
       //make this happen after the page updates the word guess line
        if(spaces.toString() == letters.toString()){
        
          // setTimeout(1000);
            alert("you win!");
            //call reset function 
            document.location.reload();
        }    
    }
    else{
        //add wrong letters to guesses array and update hanman image.
        userGuesses.push(userInput);
        document.getElementById("wrong").innerHTML = userGuesses;
        numberWrong++;


        
    }
    console.log(spaces);
    
    console.log(letters);
}

