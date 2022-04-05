const list = document.querySelector(".list");

$(document).ready(function () {
  $(".get-data").submit(function (event) {
    event.preventDefault();
    form = $(".get-data");

    $.ajax({
      url: "/",
      type: "GET",
      data: form.serialize(),
      dataType: "json",
      success: function (data) {
        //Data from REST API
        console.log(data);
        // alert(data);

        //Loop through the data
        data.forEach((item) => {
          let element = `<p> ${item.name} </>`;
          list.insertAdjacentHTML("beforeend", element);
        });
      },
    }); // END of Ajax method
  }); // End of submit event
});

$(document).ready(function () {
  $(".post-data").submit(function (event) {
    event.preventDefault();
    form = $(".post-data");

    $.ajax({
      url: "/",
      type: "POST",
      data: form.serialize(),
      dataType: "json",
      success: function (data) {
        //Data from REST API
        console.log(data);
      },
    }); // END of Ajax method
  }); // End of submit event
});
