// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   $.ajax({
//     url: "/",
//     type: "POST",

//     dataType: "json",
//     success: function (data) {
//       alert(data["success"]);
//     },
//   });
// });

const list = document.querySelector(".list");

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    form = $("form");

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
