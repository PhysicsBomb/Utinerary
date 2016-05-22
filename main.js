
var name = 1;
var when; 
var tourist;
var foodanddrink;
var museum;
var adventure; 
var beaches;
var zipcode=1;

var oauth = OAuth({
    consumer: {
        public: 'OUVsxo2Gmk9D3IIpB1QsZA',
        secret: 'tjm13cnfMoUeDpEpSNRHHokircc'
    },
    signature_method: 'HMAC-SHA1'
});

var token = {
    public: 'fap0ouB7cjRHvXqhgsNyQ82OzZXkNh5T',
    secret: 'VGAT1nJh2PtkbRGT8Md7YI_3BMI'
};

var request_data = {
    url: "https://www.api.yelp.com/v2/search?term=" + "restaurants" + "&location=" + name.replace(" ", "+") + zipcode + "&limit=2" + "&sort=2",
    method: 'POST',
    data: {
        format: "json"
    }
};

function exportToCsv() {
             name = $("#name-input").val();
             when = $("#date-input").val();
             tourist = $("#tourist_input").val();
             foodanddrink =  $("#food_input").val();
             museum =  $("#museum_input").val();
             adventure =  $("#adventure_input").val();
             beaches = $("#beaches_input").val();
             zipcode = $("#zipcode-input").val();
            ajax(zipcode);
        };

function ajax(zipcode) {
    var meetupsstring = "https://api.meetup.com/find/groups?key=64577634f446322a184d804e263&zip=" + zipcode;
    $.ajax({
   url: meetupsstring,
   
   error: function() {
       // put error code here
   },
   type: "GET",
   dataType: "jsonp",

   success: function(response) {
       var description = $('<p>').text(response.description);
       var links = $('<p>').text(response.link);
       console.log(response);
       alert(response.data[0].name);
       alert(response.data[0].description);
       alert(response.data[1].name);
       alert(response.data[1].description);
       }
   });
}

   /*  $.ajax({
           type: request_data.method,
           dataType: request_data.data,
           url: request_data.url,
           data: oauth.authorize(request_data, token)
           }).done(function(data) {
               var address = $('<p>').text(businesses.location.address);
              var rating = $('<p>').text(businesses.rating);
              var sniptext = $('<p>').text(businesses.snippet_text);
              var businessname = $('<p>').text(businesses.name)
              alert(businessname + "; address is " + address);
              alert("The rating is " + rating + ". A description of the business is: " + sniptext);
           */

function ajaxcaller() {
    exportToCsv();
    ajax();
}