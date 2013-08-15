exports.memoAdd = {
  name: "memoAdd",
  description: "I add a memo",
  inputs: {
    required: ["name", "content"],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.memo.add(connection.params.name, connection.params.content, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.memoList = {
  name: "memoList",
  description: "I list all memos",
  inputs: {
    required: [],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.memo.list(function(error, entries){
      connection.error = error;
      connection.response.memos = entries;
      next(connection, true);
    });
  }
};

exports.memoUpdate = {
  name: "memoUpdate",
  description: "I update a memo",
  inputs: {
    required: ["name", "content"],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.memo.update(connection.params.name, connection.params.content, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.memoDelete = {
  name: "memoDelete",
  description: "I delete a memo",
  inputs: {
    required: ["name"],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.memo.remove(connection.params.name, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};
