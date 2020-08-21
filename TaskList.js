const fs = require('fs');
const { Task } = require('./Task');

class TaskList {
  constructor(filePath) {
    this.categories = [
      "Grocery",
      "Household",
      "Garden",
      "Schoolwork",
      "Misc",
    ];
    this.filePath = filePath;
    this.tasks = [];
  }

  addTask(title, description, categoryIndex) {
    // TODO: Instantiate a new task
    // TODO: Add the tasks into the task lists' `this.tasks` array
  }

  getTasks() {
    // TODO: Return all tasks
  }

  getIncompleteTasks() {
    // TODO: Return all incompleted tasks
  }

  getCompletedTasks() {
    // TODO: Return all completed tasks
  }

  getTaskByIndex(index) {
    // TODO: Return a task by its index
  }

  getCategoryByIndex(index) {
    // TODO: Return a task list category by its index
  }

  getCategories() {
    // TODO: Return all the task list categories
  }

  setCategory(index, value) {
    // TODO: Index into the selected category from the `this.categories` array
    //       and update the value of that category index
  }

  searchByTerm(searchTerm) {
    // TODO: Return an array of search results for a task by a searchTerm
  }

  loadFromJson(json) {
    const { categories, tasks } = JSON.parse(json);

    for (let i = 0; i < categories.length; i += 1) {
      this.categories[i] = categories[i];
    }

    for (let i = 0; i < tasks.length; i += 1) {
      const taskData = tasks[i];
      const {
        title,
        description,
        categoryIndex,
        completed, } = taskData;
      const task = new Task(title, description, categoryIndex, completed);
      this.tasks.push(task);
    }
  }

  save() {
    const data = {
      tasks: this.tasks,
      categories: this.categories,
    };
    fs.writeFile(this.filePath, JSON.stringify(data), err => { });
  }
}

module.exports = {
  TaskList
};