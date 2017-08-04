module.exports = function (sequelize, dataTypes) {
    var seq_burger= sequelize.define("seq_burger", {
        burger_name:
        {
            type: dataTypes.STRING,
            allowNull: false
        },
        devoured: { 
            type: dataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    seq_burger.associate= function(models){
        seq_burger.belongsTo(models.seq_customer,{
            foreignKey:{
                allowNull: true
            }   
        });
    };

    return seq_burger;
};