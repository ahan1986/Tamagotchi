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

// creates a new "digitalpal" object with the name "cat"
var cat = new DigitalPal();

// adds the property "houseQuality" to the "cat" object
cat.houseQuality = 100;

// adds the "meow" method to the "cat" object which prints a message to the screen
cat.meow = function() {
  console.log("Meow! Meow!");
};

// adds the "destroyFurniture" method to the "cat" object which decreases the "cat.houseQuality" value by ten
cat.destroyFurniture = function() {
  if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  }
  else {
    console.log("I've already destroyed it all!");
  }
};

// adds the "buynewfurniture" method to the "cat" object which increases the "cat.housequality" value by fifty
cat.buyNewFurniture = function() {
  this.houseQuality += 50;
  console.log("Are you sure that's a good idea?");
};
