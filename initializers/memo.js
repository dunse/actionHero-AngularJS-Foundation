// initializers/memo.js

exports.memo = function(api, next){
  var redis = api.redis.client;
  api.memo = {

    // constants
    memoHash: "memo",

    // methods
    add: function(name, content, next){
      var self = this;
      redis.hget(self.memoHash, name, function(error, data){
        if(error != null){
          next(error);
        }else if(data != null){
          next("name already exists");
        }else{
            var data = {
              name: name,
              content: content,
              createdAt: new Date().getTime(),
            }
            redis.hset(self.memoHash, name, JSON.stringify(data), function(error){
              next(error);
            });
        }
      });
    },

    list: function(next){
      var self = this;
      redis.hgetall(self.memoHash, function(error, memos){
        var memoData = [];
        for(var i in memos){
          memoData.push( JSON.parse( memos[i] ) );
        }
        next(error, memoData);
      });
    },

    update: function(name, content, next){
      var self = this;
      redis.hget(self.memoHash, name, function(error, data){
        if(error != null){
          next(error);
        }else if(data == null){
          next("name does not exists");
        }else{
          var newData = JSON.parse(data);
          newData.content = content;
          newData.updatedAt = new Date().getTime();
          redis.hset(self.memoHash, name, JSON.stringify(newData), function(error){
            next(error);
          });
        }
      });
    },

    remove: function(name, next){
      var self = this;
      redis.hdel(self.memoHash, name, function(error, data){
        next(error);
      });
    }
  }
  next();
}
