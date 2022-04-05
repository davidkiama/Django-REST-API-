const list = document.querySelector(".list");

// $(document).ready(function () {
//   $(".get-data").submit(function (event) {
//     event.preventDefault();
//     form = $(".get-data");

//     $.ajax({
//       url: "/",
//       type: "GET",
//       data: form.serialize(),
//       dataType: "json",
//       success: function (data) {
//         //Data from REST API
//         console.log(data);
//         // alert(data);

//         //Loop through the data
//         data.forEach((item) => {
//           let element = `<p> ${item.name} </>`;
//           list.insertAdjacentHTML("beforeend", element);
//         });
//       },
//     }); // END of Ajax method
//   }); // End of submit event
// });

// $(document).ready(function () {
//   $(".post-data").submit(function (event) {
//     event.preventDefault();
//     form = $(".post-data");

//     $.ajax({
//       url: "/",
//       type: "POST",
//       data: form.serialize(),
//       dataType: "json",
//       success: function (data) {
//         //Data from REST API
//         console.log(data);
//       },
//     }); // END of Ajax method
//   }); // End of submit event
// });

const formGetData = document.querySelector(".get-data");
const formPostData = document.querySelector(".post-data");

formGetData.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let element = `<p> ${item.name} </>`;
        list.insertAdjacentHTML("beforeend", element);
      });
    });
});

formPostData.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("/", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      name: formPostData.name.value,
      alias: formPostData.alias.value,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }) // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((data) => console.log(data));
});
