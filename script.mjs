// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./common.mjs";
import { selectDate } from "./form.mjs";
import { getData } from "./storage.mjs";

window.onload = function () {
  const users = getUserIds();
  // document.querySelector("body").innerText = `There are ${users.length} users`; commented out as it was overriting the form
  selectDate();
};

const selectedUser = document.querySelector("#userSelection");
const displayAgenda = document.querySelector("#displayAgendaBox");
// eventlistener to render an Agenda when chose a user
selectedUser.addEventListener("change", (e) => {
  const selectedUserId = e.target.value;
  displayAgenda.innerHTML = "";

  if (selectedUserId !== "default") {
    const userData = getData(selectedUserId);
    if (userData && userData.length > 0) {
      const currentDate = new Date().toISOString().split("T")[0];
      const futureDate = userData.filter((entry) => entry.date >= currentDate);
      renderAgenda(futureDate);
    } else {
      displayAgenda.textContent = "Sorry, here is not upcoming revisions.";
    }
  } else {
    displayAgenda.textContent = "We don't have an agenda for this user yet";
  }
});
// rendered an Agenda as a list
export function renderAgenda(data) {
  const list = document.createElement("ol");
  list.className = "agendaList";

  data.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "itemAgendaList";
    item.textContent = `Topic: ${entry.topic}, Date: ${entry.date}`;
    list.appendChild(item);
  });
  displayAgenda.appendChild(list);
}
