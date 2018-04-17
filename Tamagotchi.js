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