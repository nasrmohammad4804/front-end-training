const countries = document.getElementById("countries");
let fields = ["name", "capital", "currencies", "flags"];

function initializeTableColumn() {
  let masterRow = document.createElement("tr");

  let title = document.createElement("th");
  title.textContent = "title";

  let official = document.createElement("th");
  official.textContent = "official";

  let capital = document.createElement("th");
  capital.textContent = "capital";

  let flag = document.createElement("th");
  flag.textContent = "flag";

  masterRow.append(title, official, capital, flag);

  countries.append(masterRow);
}

function getTitle(info) {
  let title = document.createElement("td");
  title.textContent = info.name.common;

  return title;
}
function getOfficial(info) {
  let official = document.createElement("td");
  official.textContent = info.name.official;
  return official;
}

function getCapital(info) {
  let capital = document.createElement("td");
  capital.textContent = info.capital[0];
  return capital;
}

function getFlag(info) {
  let flag = document.createElement("td");
  flag.style.paddingBlockStart = "0px";
  flag.style.paddingBlockEnd = "0px";

  let image = document.createElement("img");
  image.style.width = "100%";
  image.style.height = "100%";

  image.setAttribute("src", info.flags.png);
  image.setAttribute("alt", info.flags.alt);

  flag.append(image);

  return flag;
}

function createTable(data) {
  countries.style.display = "block";

  initializeTableColumn();

  data.forEach((info) => {
    let row = document.createElement("tr");

    let title = getTitle(info);
    let official = getOfficial(info);
    let capital = getCapital(info);
    let flag = getFlag(info);

    row.append(title, official, capital, flag);
    countries.append(row);
  });
}

fetch(`https://restcountries.com/v3.1/all?fields=${fields.join()}`)
  .then((response) => response.json())
  .then((data) => createTable(data));
