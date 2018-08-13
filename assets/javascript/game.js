var words = ["test", "test1", "another test", "one more test", "ok last one"];
var word;
var letters = [];
var spaces= [];
var userInput;
var userGuesses = [];

window.onload = function(){
   // document.getElementById("test").innerHTML = words;
    word = words[Math.floor(Math.random() * words.length)];
    letters = word.split("");
    document.getElementById("test").innerHTML = letters;
    console.log(word);
  
    letters.forEach(x => {
        spaces.push("_");
    });
    document.getElementById("test").innerHTML = spaces.join(" ");

    console.log(spaces);
    console.log(letters);


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
           i++
       });

        //var updateSpace = letters.indexOf(userInput);
       // spaces[updateSpace] = userInput;
        document.getElementById("test").innerHTML = spaces.join(" ");
        
        
    }
    else{
        //add wrong letters to guesses array and update hanman image.  
    }
}

