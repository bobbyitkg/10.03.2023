// загрузить информацию про все фотографии
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then(function (photos) {
    // получить первую фотографию
    const firstPhoto = photos[0];

    // загрузить информацию про альбом, в котором находится эта фотография
    fetch("https://jsonplaceholder.typicode.com/albums/" + firstPhoto.albumId)
      .then(function (response) {
        return response.json();
      })
      .then((album) => {
        // вывести заголовок альбома
        console.log(album.title);
      });
  });



fetch("https://api.exchangerate.host/latest?base=USD&symbols=KGS")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".kgs-usd").textContent = "$1 = " + data.rates.KGS.toFixed(2) + " сом";
  });

let ageDisplay = document.querySelector("#age");
let countryDisplay = document.querySelector("#country");
let genderDisplay = document.querySelector("#gender");
let nameInpt = document.querySelector("#name");

document.querySelector("#who").addEventListener("click", function () {
  ageDisplay.textContent = "Loading...";
  genderDisplay.textContent = "Loading...";
  countryDisplay.textContent = "Loading...";

  fetch("https://api.agify.io/?name=" + nameInpt.value)
    .then((response) => response.json())
    .then((data) => {
      ageDisplay.textContent = "Age: " + data.age;
    });

  fetch("https://api.genderize.io/?name=" + nameInpt.value)
    .then((response) => response.json())
    .then((data) => {
      genderDisplay.textContent = "Gender: " + data.gender;
    });
  
  fetch("https://api.nationalize.io/?name=" + nameInpt.value)
    .then((response) => response.json())
    .then((data) => {
      countryDisplay.textContent = "Country: " + data.country[0].country_id;
    });
});

// Сегодня скоропечатание! 
