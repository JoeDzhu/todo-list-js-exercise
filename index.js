// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {

      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },//用${}做引用的时候，还可以做简单boolean运算用ternary；

    completeTask: function() {
      this.complete = true;
    }
  };
  return fask;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1,task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
