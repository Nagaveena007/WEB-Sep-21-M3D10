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
const movies = document.getElementById("romantic");

const BASE_URL = "https://striveschool-api.herokuapp.com/api/movies/romantic";
const method = "GET";
const getMovies = async () => {
  // e.preventDefault();
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies",
      {
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzYyMTA0MjMsImV4cCI6MTYzNzQyMDAyM30.9uvhyG1EhitWyihcTHCf1D72jKOt1Lf3wMSVOrXZ0wY",
        },
      }
    );

    if (response.ok) {
      const body = await response.json();
      console.log(body);

      body.forEach((element) => {
        fetch(`https://striveschool-api.herokuapp.com/api/movies/${element}`, {
          method: "GET",

          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzYyMTA0MjMsImV4cCI6MTYzNzQyMDAyM30.9uvhyG1EhitWyihcTHCf1D72jKOt1Lf3wMSVOrXZ0wY",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // movies.innerHTML = "";
            data.forEach((movie) => {
              movies.innerHTML += `<img
              src="${movie.imageUrl}"
              class="img-fluid section-img" 
              alt=""
            />`;
            });
          });
      });
    } else {
      throw Error("fetch failed");
    }
  } catch (e) {
    alert(e);
  }
};

getMovies();
