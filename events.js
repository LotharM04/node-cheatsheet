const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(
    "This is a event emitter for tutorial with sum value of: " + (num1 + num2)
  );
});

eventEmitter.emit("tutorial", 2, 3);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let person = new Person("Steve");

person.on("personevent", () => {
  console.log("My name is ", person.name);
});

person.emit("personevent");
