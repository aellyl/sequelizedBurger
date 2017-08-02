var orm= require("../config/orm.js");

var burger={
    selectAll:function(cb){
        orm.selectAll("burgers",function(result){
            console.log("select all: "+result);
            cb(result);
        });
    },
    insertOne:function(data,cb){
        orm.insertOne("burgers",data,function(result){
            console.log("insertOne: "+result);
            cb(result);
        })
    },
    updateOne:function(colVals,condCol,condVal,cb){
        orm.updateOne("burgers",colVals,condCol,condVal,function(result){
            console.log("updateOne: "+result);
            cb(result);
        })
    }
}

module.exports=burger;