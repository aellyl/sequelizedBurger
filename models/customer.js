module.exports = function (sequelize, dataTypes) {
    var seq_customer= sequelize.define("seq_customer", {
        customer_name:
        {
            type: dataTypes.STRING,
            allowNull: false
        }
    });

    seq_customer.associate=function(models){
        seq_customer.hasMany(models.seq_burger,{
            onDelete: "cascade"
        });
    };
    return seq_customer;
};