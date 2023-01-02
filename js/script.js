const mod_1 = document.querySelector(".modal-1");
const mod_2 = document.querySelector(".modal-2");

const days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

function createDays(days) {
  for (let i = 0; i < days.length; i++) {
    const getDays = days[i];
    document.querySelector(
      "#cal-head"
    ).innerHTML += `<td class='${getDays}'>${getDays}</td>`;
  }
}

createDays(days);

const date = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDate(date) {
  for (let x = 0; x < date.length; x++) {
    const dates = date[x];
    if (dates === 1) {
      document.querySelector(
        "#cal-body"
      ).innerHTML += `<td onclick='openModal(1)'><class='${date[x]}'>${date[x]}</td>`;
    } else if (dates === 2) {
      document.querySelector(
        "#cal-body"
      ).innerHTML += `<td onclick='openModal(2)'><class='${date[x]}'>${date[x]}</td>`;
    } else {
      document.querySelector(
        "#cal-body"
      ).innerHTML += `<td><class='${date[x]}'>${date[x]}</td>`;
    }
  }
}
createDate(date);

mod_1.innerHTML = `<h1>${days[0]} ${date[0]}</h1> <div> Révision javascript </div>`;
mod_2.innerHTML = `<h1>${days[1]} ${date[1]}</h1> <div> Base de donnée </div>`;

function openModal(option) {
  if (option == 1) {
    document.querySelector(".modal-1").style.display = "flex";
  } else if (option == 2) {
    document.querySelector(".modal-2").style.display = "flex";
  }
}

function closeModal(option) {
  if (option == "close") {
    document.querySelector(".modal-1").add;
  }
}

closeModal(close);
