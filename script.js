var name = 1;
var dostuff = 1;
var like = 1;
var nolike = 1;

function exportToCsv() {
   name = $("#name-input").val();
   dostuff = $("#do-input").val();
   like =  $("#like-input").val();
   nolike =  $("#dislike-input").val();
   zipcode = $("#zipcode-input").val();
   console.log(name);
}

var meetupsstring = "https://api.meetup.com1/find/groups2?zip=" + zipcode + "&radius=3";

$("#b").click(exportToCsv);

$.ajax({
   url: meetupsstrings,
   
   error: function() {
       // put error code here
   },
      
   dataType: "json",
   
   success: function() {
       var $description = $('<p>').text(data.results[4].description);
       var $links = $('<p>').text(data.results[2].link);
   },
   
   type: "GET"
});