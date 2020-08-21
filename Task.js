class Task {
  constructor() {
    // TODO: Set up constructor that sets the task's title, description, 
    //       categoryIndex, and completion status (with a default of false)
  }

  complete() {
    // TODO: Set the completion status to be true
  }

  getShortText() {
    // TODO: Return a shortened version of the task's title (max 70 chars)
  }

  matches(searchTerm) {
    // TODO: Return true of false depending on whether a
    //       searchTerm is in the task's title
  }
}

module.exports = {
  Task
};
