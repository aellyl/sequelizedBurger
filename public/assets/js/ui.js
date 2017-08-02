$(document).ready(function() {
    var count = $("#displayAteBurger ul").children().length;
    if(count <= 0)
        {
            $("#displayAteBurger .panel-body").text("You have not eaten any burger yet!");
        }

    if ($("#displayBurger ul").children().length <=0)
        {
            $("#displayBurger").html("<div class='well' style=\"font-size:2em\">You don't have any burger to eat. Start adding more burgers! <i class=\"fa fa-arrow-down fa-2x\" aria-hidden=\"true\" style=\"color:red\"></i></div>");
        }


});