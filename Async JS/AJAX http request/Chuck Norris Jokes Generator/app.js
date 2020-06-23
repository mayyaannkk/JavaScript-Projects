document.querySelector("#get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector("#number").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const list = document.querySelector(".jokes");
      const response = JSON.parse(this.responseText);
      let output = "";

      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
        list.innerHTML = output;
      }
    }
  };
  xhr.send();
}
