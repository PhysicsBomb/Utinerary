// define variables beforehand to give them global access

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

var googmapsstring = "https://maps.googleapis.com/maps/api/geocode/json?address=" + name.replace(" ", "+") + "&key="; // formats the google maps string, put Google Maps API key in the last string

$("#b").click(exportToCsv);

$.ajax({
    url: googmapsstring,
    
    error: function() {
        // put error code here
    },
       
    dataType: "json",
    
    success: function() {
        
    },
    
    type: "GET"
});