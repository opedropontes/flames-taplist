// Lê o beers.json

let beer_image_path = "../images/beers/";

async function fetchData() {
  fetch("../beers.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      response.beers.forEach((beer) => {
        const tap = document.querySelector("#tap" + beer.tap);

        if (tap) {
          // Tap
          document.querySelector("#tap" + beer.tap).classList.remove("hide");
          tap.querySelector(".c-tap").innerHTML = beer.tap;
          // Imagem
          tap
            .querySelector(".c-img img")
            .setAttribute("src", beer_image_path + beer.image);
          tap.querySelector(".c-img img").setAttribute("alt", beer.beer);
          // Nome
          tap.querySelector(".beer-name").innerHTML = beer.beer;
          // Cervejaria
          tap.querySelector(".brewery").innerHTML = beer.brewery;
          // Estilo
          tap.querySelector(".beer-style").innerHTML = beer.style;
          // Local
          tap.querySelector(".brewery-location").innerHTML = beer.location;
          //ABV
          tap.querySelector(".c-abv").innerHTML = beer.abv + "%";
          // Half pint
          tap.querySelector(".c-halfpint").innerHTML =
            "R$" + beer.prices.half_pint;
          // Pint
          tap.querySelector(".c-pint").innerHTML = "R$" + beer.prices.pint;
          // Litro
          tap.querySelector(".c-litro").innerHTML = "R$" + beer.prices.liter;
          // IBU
          for (let i = 0; i < beer.ibu_scale; i++) {
            const icone = tap
              .querySelector(".c-ibu")
              .querySelectorAll("div")
              [i].classList.add("fill");
          }
        }
      });
    });
}

fetchData();
