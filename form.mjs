import { addData } from "./storage.mjs";

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

// so this becomes:
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	// instead of click it is submit event
	event.preventDefault(); // added this to show message topic added which was not showing because of the instant page reload on form submission

	const selectedUserValue = selectedUser.value;
	const topicNameValue = topicName.value;
	const firstDateValue = firstDate.value;

	if (selectedUserValue === "default" || !firstDateValue || !topicNameValue) {
		alert("Please fill all the fields");
		return;
	}
	const newEntry = {
		topic: topicNameValue,
		date: firstDateValue,
	};
	addData(selectedUserValue, [newEntry]);
	topicAdded.innerHTML = "Topic added";
});
