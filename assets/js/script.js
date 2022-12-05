var time = moment().hour();
var date = $("#date");
var saveBtn = $(".item3");

dateDisplayOn();
function dateDisplayOn() {
    var today = moment().format("LLL");
  date.text(today);
}

colorMatch(); 
function colorMatch() {
    
    $(".item2").each(function() {
        var rightNow = parseInt($(this).attr("id"));

        if (rightNow > time) {
            $(this).addClass("past");
        } else if (rightNow === time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }

        var persist = localStorage.getItem(rightNow);
        if (persist) {
            $(this).siblings(".item2").val(persist);
        }
    })
};


saveBtn.on('click', function(event) {
    event.preventDefault();

    var fakeArgument= "";
    var action= $(this).siblings(".item2").val();

    localStorage.setItem(fakeArgument, action);
});






/*
moment() = timeBackground.css("background-color", "#ff6961");

*/
