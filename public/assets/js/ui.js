$(document).ready(function() {
    var count = $("#displayAteBurger ul").children().length;
    if(count <= 0)
        {
            $("#displayAteBurger .panel-body").text("You have not eaten any burger yet!");
        }

    if ($("#displayBurger ul").children().length <=0)
        {
            $("#displayBurger").html("<div class='well' style=\"font-size:14pt\">No burgers to eat. Start adding more burgers with the form below!</i></div>");
        }


    $.get("/api/customers",function(data){
        //console.log(data);
        if(data.length>0)
            {
                $("#displayBurger form").removeClass("hidden");
                $(".noCustomer").addClass("hidden");
                for(var i=0;i<data.length;i++)
                    {
                        console.log("pend?");
                        $(".customers").append("<option value=\""+data[i].id+"\">"+data[i].customer_name+"</option>");
                    }
            }
    });
});