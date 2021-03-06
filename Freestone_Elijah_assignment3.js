/*
Elijah Freestone
SDI 1209
Project 3
9-10-12
*/

//Objects
var myCharacter = { // My Character object with Accessor and string return
    "name": "Eli",
    "age": 28,
    "badBack": true,
    "interests": ["music", "cars", "technology"],
    "getname": function (name) {
        return name;
    }
};

var myCar = { //My Car Object with Object Mutator
    "brand": "Subaru",
    "doors": 4,
    "running": true,
    "security": false,
    "booFunc": function(booVar1, booVar2) { //Boolean Function with mutator
        myCar.running = false; //Object Mutator
        var booOut = (booVar1 && booVar2)
            if (myCar.running || booVar) {
                say("With 2 blocks left, my car makes a horrible screech as the engine seizes. ")
            } else {
                say("My car is still going strong! ")
        } return booOut;
    }
};

var myDog = { //My Dog Object for Prcedure and nested conditional
    "name": "Echo",
    "breed": "Blue Heeler ",
    "age": 12,
    "attack": true,
    "zombiesComing": function() { //Procedure
        if (myDog.attack === true) {
            if (myDog.name === "Echo")
                say(myDog.name + " pounces on a Zombie and rips it to shreds just before it bites me! ")
            } else {
                say("Must have been a cat. ")
        }
    }
};


var myGun = { //My Gun Object for Function Method
    "type": "semi-auto handgun",
    "bullets": 11,
    "extraClips": false,
    "shootZombies": function() { //Function with Number return
        var bullets = myGun.bullets;
            for (var bullets = 10; bullets >= 0; bullets--) {
        say("I shoot a Zombie. " + bullets + " bullets left.")
        } return bullets
    }
};

var zombies = { //Zombies Object
    "speed": "slow! ",
    "howMany": 41,
    "zombiesKilled": function() { //Function with Object return
        if (zombies.speed === "slow") {
            say("Good thing the zombies are " + zombies.speed);
        } else {
            say("Zombies are fast! How have we survived? ");
        }   say("We've killed " + zombies.howMany + " so far. "); 
    }
};

var destination = { //Warehouse Store Object (JSON)
    "where": "Warehosue Store",
    "size": "large",
    "secure": true,
    "exits": 3,
    "ammenities": {
        "weapons": true,
        "supplies": ["cooking equipment", " food", " camping equipment", " sleeping area"]
    }
};

//Global Variables
var start = "My " + myCar.brand + " backfires with a loud bang as it sputters and dies. Looks like that caught all the Zombies attention! ",
    tries = 3,
    booVar = true,
    array = ["blocks", "steam"],
    danger = "yes",
    end = "Safe at last!"
;

var say = function(message) { console.log(message); }; //Console.log Function

var startEngine = function(tries) { //Stand-alone Number Function
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

var damage = function(array) { //Stand-alone Array Procedure with for loop
    say("With the Zombies safely in my rearview, I can see " + array[1] + " pouring from under my hood through my trashed widshield");
    say("Dang Zombies broke my radiator!");
    say("We have 7 more " + array[0] + " until the Warehouse Store but I don't think my crippled car will make it. ")
    for (var blocks = 7; blocks > 2; blocks--) {
        say(blocks + " blocks to go and still going strong.");
    }
};

say("Hi, my name is " + myCharacter.name);

say(start); //With Call From My Car Object

var triesTook = startEngine(tries); //Number Function Output

say("I gun it and head straight for the incoming hoard of Zombies. ");

say("I plow through at least 30 of them and speed off towards safety. ");

damage(array);

myCar.booFunc(); //Boolean Output

say("Looks like we're walking from here.");

say("We hear a loud crash as we're getting out of the car. ");

say("Zombies are closing in fast! ");

myDog.zombiesComing(danger);

myGun.shootZombies();

say("No more bullets. Time to run! ");

say("Echo and I run to the " + destination.where + " as fast as we can. ");

zombies.zombiesKilled();

say("We have all we need. " + destination.ammenities.supplies);

say(end);