var DigiPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    //method which feeds the digipal when they are hungry and set them to sleepy
    this.feed = function () {
        if(this.hungry == true) {
            console.log("Yummy Yummy!!!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("I'm not hungry....");
        }
    };

    //method which puts the digipal to sleep when they are sleepy.  This will increase their age by one
    //set them to bored
    this.sleep = function() {
        if(this.sleepy === true) {
            console.log("ZZZZzzzzzZZZZZzzzz~~~~");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("I'm NOT TIRED!");
        }
    };
    //method which is called in 'this.sleep' to increase the age of my digipal by one
    this.increaseAge = function() {
        this.age++;
        console.log("I am a year older!  I am " + this.age +" old!" );
    };
};

//creating a new digipal object named 'dog'
var dog = new DigiPal();

//adding a property 'outside' to the 'dog' object and setting it to false
dog.outside = false;

//adding method 'bard' to the 'dog' object which will print a message to the screen
dog.bark= function() {
    console.log("Woof! Woof!");
};

//adding method 'letoutside' to the 'dog' object which lets the 'dog' outside when it's outside
dog.letOutside = function() {
    if(this.outside === false) {
        console.log("Yay! I love the sunlight!");
        this.outside = true;
        this.bark();
    } else {
        console.log("we're .... outside....");
    }
}

dog.letInside = function() {
    if(this.outside === true) {
        console.log("Awww. Do I have to go?");
        this.outside = false;
    } else {
        console.log("we're already inside....");
    }
}