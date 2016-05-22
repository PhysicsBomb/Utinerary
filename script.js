var name = 1;
var dostuff = 1;
var like = 1;
var nolike = 1;

function exportToCsv() {
    name = $("#name-input").val();
    dostuff = $("#do-input").val();
    like =  $("#like-input").val();
    nolike =  $("#dislike-input").val();
    console.log(name);
}

$("#b").click(exportToCsv);

function formatgooglemapslink(place) {
    
}

$.ajax({
    
});