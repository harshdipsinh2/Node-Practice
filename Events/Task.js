const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "user-update": 0,
    "user-logout": 0
}

emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    console.log(`${username} logged in.`);
});
emitter.on("user-purchase", (username ,item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased ${item}.`);
});
emitter.on("user-update", (username,field) => {
    eventCounts["user-update"]++;
    console.log(`${username} updated their ${field}.`);
});
emitter.on("user-logout", (username) => {   
    eventCounts["user-logout"]++;
    console.log(`${username} has logged out.`);
});

emitter.on("summary",() => {
console.log(eventCounts);
});


    
emitter.emit("user-login","Thapa");
emitter.emit("user-purchase","Thapa","laptop");
emitter.emit("user-update","Thapa","email");
emitter.emit("user-logout","Thapa");
emitter.emit("summary");

    