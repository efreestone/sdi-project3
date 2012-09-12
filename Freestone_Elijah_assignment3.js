/*
Elijah Freestone
SDI 1209
Project 3
9-10-12
*/

//Global Variables
var start = "My car backfires with a loud bang as it sputters and dies. Looks like that caught all the Zombies attention! ",
    tries = 3,
    booVar = true,
    array = ["blocks", "steam"]
;

var say = function(message) { console.log(message); }; //Console.log Function

say(start);

var startEngine = function(tries) { //Number Function
    var startTries = 1;
        say("I frantically turn the key trying to bring it back to life. ");
        say(startTries + " try. Nothing happens. ");
    while (startTries < 3) { //While Loop
        startTries++;
            if (startTries < 3) {
                say(startTries + " tries. Nothing. ");
            } else {
                say(startTries + " tries. The engine roars back to life! ") };
        }; 
    say("Can't believe it only took " + startTries + " tries to get her going again!");
return startTries;
};

var triesTook = startEngine(tries); //Number Function Output


/*
var arrayFunc = function(array) { //Array Function
    var myArray = ["steam ", "blocks "];
    for (var i=7, j=array.length; i > j; i--) {
        say(array[i] + "used to " + myArray[i]);
    }
    var arrayOutput = arrayFunc(array);
    return arrayOutput;
};
*/


//arrayFunc(arrayOutput);

//say(arrayOutput);




/*
var zombies = function(zombiesInDrive) { //Procedure
        if (zombiesInDrive === "yes") { 
            say("I take out several Zombies like Bowling Pins as I speed down the driveway. ") 
        } else {
            say("No Zombies in the driveway. Looks like we're free and clear for the moment. ")
        }
};

var booFunc = function(booVar1, booVar2) { //Boolean Function
    var booOut = (booVar1 && booVar2)
        if (booVar1 == booVar2) {
            say("We need to head west but the road is blocked by an overturned Semi-truck.")
        } else {
            say("Roads are clear and we're heading in the right direction! ")
    } return booOut;
};

var stringFunc = function(string1, string2) { //String Function
    var field = "safe";
        if (field === "fun") {
            say("Que offroading scene in non-offroading vehicle! ");
        } else {
            stringOut = say("Should I take the " + string2 + " around or try cutting through the " + string1 + "? ");
    } return stringOut;
};

var blocksLeft = function(blocks) { //Number Function
    var blocksToGo = 5;
        say(blocksToGo + " blocks left until downtown. ");
    while (blocksToGo > 0) {
            blocksToGo--;
                if (blocksToGo > 0) {
                    say(blocksToGo + " more. ");
                } else {
                    say("We've reached the edge of downtown. ") };
            };
        say("We covered " + blocks + " blocks.");
    say("Do we cut through downtown of take side streets? ");
    return blocksToGo;
};


*/