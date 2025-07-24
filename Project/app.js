import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showmenu = () => {
  console.log("\n 1: add a task");
  console.log(" 2: view tasks");
  console.log(" 3: exit");
  rl.question("Choose an option: ", handleInput);
};
const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log(`Task added: ${task}`);
      showmenu();
    });
  }
  else if (option === "2") {
    console.log("\n your todo list");

    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    })
    showmenu();
  }
  else if (option === "3") {
    console.log("Exiting the application. Goodbye!");
    rl.close();
  }
  else {
    console.log("Invalid option. Please try again.");
    showmenu();
  }
};

showmenu();
