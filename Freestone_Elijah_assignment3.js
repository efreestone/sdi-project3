/*
Elijah Freestone
SDI 1209
Project 3
9-10-12
*/

var myCar = { //My Car Object
    brand: "Subaru",
    doors: 4,
    running: true,
    security: false
};

var myDog = { //My Dog Object
    name: "Echo",
    breed: "Blue Heeler ",
    age: 12,
    attack: true
};

var warehouseStore = { //Warehouse Store Object (JSON)
    size: "large",
    secure: true,
    exits: 3
};

myCar.running = false; //Object Mutator

//Global Variables
var start = "My " + myCar.brand + " backfires with a loud bang as it sputters and dies. Looks like that caught all the Zombies attention! ",
    tries = 3,
    booVar = true,
    array = ["blocks", "steam"],
    danger = "yes"
;

var say = function(message) { console.log(message); }; //Console.log Function

say(start); //With Call From My Car Object

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
return triesTook;
};

var triesTook = startEngine(tries); //Number Function Output

say("I gun it and head straight for the incoming hoard of Zombies. ");

say("I plow through at least 30 of them and speed off towards safety. ");

var damage = function(array) {
    say("With the Zombies safely in my rearview, I can see " + array[1] + " pouring from under my hood through my trashed widshield");
    say("Dang Zombies broke my radiator!");
    say("We have 7 more blocks until the Warehouse Store but I don't think my crippled car will make it. ")
    for (var blocks = 7; blocks > 2; blocks--) {
        say(blocks + " blocks to go and still going strong.");
    }
};

damage(array);

var booFunc = function(booVar1, booVar2) { //Boolean Function
    var booOut = (booVar1 && booVar2)
        if (myCar.running || booVar) {
            say("With 2 blocks left, my car makes a horrible screech as the engine seizes. ")
        } else {
            say("My car is still going strong! ")
    } return booOut;
};

booFunc(); //Boolean Output

say("Looks like we're walking from here.");

say("We hear a loud crash as we're getting out of the car. ");

say("Zombies are closing in fast! ");

var zombiesComing = function(danger) { //Procedure
    if (myDog.attack === true) {
        say(myDog.name + " pounces on a Zombie and rips it to shreds just before it bites me! ")
    } else {
        say("Must have been a cat. ")
    }
};

zombiesComing(danger);

/*
var arrayFunc = function(array) { //Array Function
    var myArray = ["steam ", "blocks "];
    for (var i=7, j=array.length; i < j; i--) {
        say(array[i] + "used to " + myArray[i]);
    }
    var arrayOutput = arrayFunc(array);
    return arrayOutput;
};

arrayFunc(array);
*/