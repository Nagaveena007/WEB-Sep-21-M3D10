/* fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzYxMTgwNDcsImV4cCI6MTYzNzMyNzY0N30.7idrIDQ6__QkkjU5hOTvdBSoLnymYHRZSu3S-eOwSZo"
}
}
 */
const Headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzYyMTA0MjMsImV4cCI6MTYzNzQyMDAyM30.9uvhyG1EhitWyihcTHCf1D72jKOt1Lf3wMSVOrXZ0wY",
};
const BASE_URL = "https://striveschool-api.herokuapp.com/api/movies";
const method = " GET";
const getMovies = async () => {
  // e.preventDefault();
  try {
    const response = await fetch(BASE_URL, {
      method,
      body: JSON.stringify(),
      Headers,
    });
    console.log(response);

    if (response.ok) {
      const body = await response.json();
      const row = document.getElementById("#romantic");
      row.innerHTML = "";
      body.forEach((movie) => {
        row.innerHTML += `<img
            src="./assets/media/media0.webp"
            class="img-fluid section-img"
            alt=""
          />`;
      });
    }
  } catch (e) {
    console.log(e);
  }
};
window.onload = () => {
  getMovies();
};
