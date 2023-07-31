class Get {
  constructor(path, func) {
    this.name = "GET";
    this.path = path;
    this.func = func;
  }
  execute(req, res) {
    this.func(req, res);
  }
}

class Post {
  constructor(path, func) {
    this.name = "POST";
    this.path = path;
    this.func = func;
  }
  execute(req, res) {
    this.func(req, res);
  }
}

class Put {
  constructor(path, func) {
    this.name = "PUT";
    this.path = path;
    this.func = func;
  }
  execute(req, res) {
    this.func(req, res);
  }
}

class Delete {
  constructor(path, func) {
    this.name = "DELETE";
    this.path = path;
    this.func = func;
  }
  execute(req, res) {
    this.func(req, res);
  }
}

module.exports = { Get, Post, Put, Delete };
