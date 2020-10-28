
function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#city").val()
  $.ajax({url: `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=64a4b6f5a3a36a2cda3bf14288e4a9b8&units=imperial`})
    .then(
      (data) => {
        console.log(data);
        $("#weatherfor").text(data.name)
        $("#temperature").text(data.main.temp)
        $("#feelslike").text(data.main.feels_like)
        $("#humidity").text(data.main.humidity)
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)