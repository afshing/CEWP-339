$(document).ready(function(){
  $("button").click(testPost);
});

  function testPost() {


    let payload = {
        token: "{API_KEY}",
        data: {
          name: "nameFirst",
          email: "internetEmail",
          phone: "phoneHome",
          _repeat: 300
        }
    };

    $.ajax({
      type: "POST",
      url: "https://app.fakejson.com/q",
      data: payload,
      success: function(resp) {
          console.log(resp);
        }
    });


  }
