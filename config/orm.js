var connection=require("./connection.js");

var orm={
    selectAll: function(tableName,cb){
        connection.query("SELECT * from ??",[tableName],function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName,data,cb){
        connection.query("INSERT INTO ?? SET ?",[tableName,data],function(err){
            if(err){
                console.log(err);
                cb(false);
            }
            else
            {
                console.log("Inserted this record: "+data);
                cb(true);
            }
        });

    },
    updateOne: function(tableName,colVals,condCol,condVal,cb){
  
        connection.query("UPDATE ?? SET ? WHERE ??=?",[tableName,colVals,condCol,condVal],function(err,result){
            if (err) throw err;
            cb(result);
        });

    }
};

module.exports=orm;