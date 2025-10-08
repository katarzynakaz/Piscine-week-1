import { addData, getData } from "./storage.mjs";
import { renderAgenda } from "./script.mjs";

//to submit the form
const selectedUser = document.querySelector("#userSelection");
const topicName = document.querySelector("#topicName");
const submitBtn = document.querySelector(".btn");
const firstDate = document.querySelector("#firstDate");
const topicAdded = document.querySelector("#topicAdded");

export function selectDate() {
  // const firstDate = () => new Date().toLocaleDateString() here this creates d/m/yyyy output which is compatible with the browser but not with input type date in form
  //so I am sticking to below method
  firstDate.value = new Date().toISOString().split("T")[0]; //this creates yyyy-mm-dd output which is compatible with input type date in form
}

//this was the way I did it initially, and to make form submit on enter I am using submit event inbuild into form
// submitBtn.addEventListener("click", (event) => {
// 	event.preventDefault(); // added this to show message topic added which was not showing because of the instant page reload on form submission

// 	const selectedUserValue = selectedUser.value;
// 	const topicNameValue = topicName.value;
// 	const firstDateValue = firstDate.value;

// 	if (selectedUserValue === "default" || !firstDateValue || !topicNameValue) {
// 		alert("Please fill all the fields");
// 		return;
// 	}
// 	const newEntry = {
// 		topic: topicNameValue,
// 		date: firstDateValue,
// 	};
// 	addData(selectedUserValue, [newEntry]);
// 	topicAdded.innerHTML = "Topic added";
// });

// cleanInput = () => topicName.value.trim().toUpperCase();
//this is a shorter way of writing below code and instead of placing it in a helper function I assigned to a variable
// //clean input
// //remove space at start
// topicNameValue =
// 	topicNameValue[0] === " " ? topicNameValue.slice(1) : topicNameValue;
// //empty space at end
// topicNameValue[topicNameValue.length - 1] === " "
// 	? topicNameValue.slice(0, topicNameValue.length - 1)
// 	: topicNameValue;

// so the event listener becomes:
const form = document.querySelector("form");
const displayAgenda = document.querySelector("#displayAgendaBox");

form.addEventListener("submit", (event) => {
  // instead of click it is submit event
  event.preventDefault(); // added this to show message topic added which was not showing because of the instant page reload on form submission

  const selectedUserValue = selectedUser.value;
  // let topicNameValue = topicName.value;
  let topicNameValue = topicName.value.trim().toUpperCase();

  const firstDateValue = firstDate.value;

  if (
    selectedUserValue === "default" ||
    !firstDateValue ||
    !topicNameValue ||
    topicNameValue === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  const newEntry = {
    topic: topicNameValue,
    date: firstDateValue,
  };
  addData(selectedUserValue, [newEntry]);
  topicAdded.innerHTML = "Topic added";

  // cleaned displayAgenda space and render updated an Agenda after submitting a new topic to the Agenda
  displayAgenda.innerHTML = "";
  const updatedData = getData(selectedUserValue);
  if (updatedData && updatedData.length > 0) {
    const currentDate = new Date().toISOString().split("T")[0];
    const futureDate = updatedData.filter((entry) => entry.date >= currentDate);
    renderAgenda(futureDate);
  }
  // cleaned the form
  document.querySelector("#userSelection").value = "default";
  document.querySelector("#topicName").value = "";
  selectDate();
});
