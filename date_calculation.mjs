import { addDays, addMonths, addYears, format } from "https://esm.sh/date-fns";

let inputValue = document.querySelector("#start").value;
const [year, month, day] = inputValue.split("-").map(Number);
const inputDate = new Date(year, month - 1, day);
console.log("local Date", inputDate);

let today = new Date();

function logOnlyFutureDate(message, date) {
  if (date >= today) {
    console.log(`${message} ${format(date, "do LLLL yyyy")}`);
  }
}

let weekFromNow = addDays(inputDate, 7);
// console.log("One week from now:", weekFromNow);
let monthFromNow = addMonths(inputDate, 1);
// console.log("One month from now:", monthFromNow);
let threeMonthFromNow = addMonths(inputDate, 3);
// console.log("Three month from now:", threeMonthFromNow);
let sixMonthFromNow = addMonths(inputDate, 6);
// console.log("Six month from now:", sixMonthFromNow);
let oneYearFromNow = addYears(inputDate, 1);
// console.log(oneYearFromNow);

logOnlyFutureDate("One week from now:", weekFromNow);
logOnlyFutureDate("One month from now:", monthFromNow);
logOnlyFutureDate("Three month from now:", threeMonthFromNow);
logOnlyFutureDate("Six month from now:", sixMonthFromNow);
logOnlyFutureDate("One Year from now:", oneYearFromNow);

// const today = new Date();

// // 2️⃣ Get the container where we will render the agenda
// const agendaContainer = document.querySelector("#agendaContainer");

// // 3️⃣ Main function to generate revision dates
// function generateRevisions(topic, inputDate) {
//   // 3a️⃣ Define the standard revision intervals relative to the input date
//   const revisions = [
//     { label: "1 week after", date: addDays(inputDate, 7) },
//     { label: "1 month after", date: addMonths(inputDate, 1) },
//     { label: "3 months after", date: addMonths(inputDate, 3) },
//     { label: "6 months after", date: addMonths(inputDate, 6) },
//     { label: "1 year after", date: addYears(inputDate, 1) },
//   ];

//   // 3b️⃣ Create a container for this topic
//   const topicDiv = document.createElement("div");
//   const title = document.createElement("h3");
//   title.textContent = `Agenda for topic "${topic}":`;
//   topicDiv.appendChild(title);

//   const list = document.createElement("ul");

//   // 3c️⃣ Loop through each revision date
//   revisions.forEach((rev) => {
//     const item = document.createElement("li"); // create a list item for each revision

//     if (rev.date < today) {
//       // 3d️⃣ Case: revision date is in the past
//       item.textContent = `(No topic is shown for ${rev.label} the selected date, as this is in the past)`;
//       // console.log(item.textContent); // optional for testing
//     } else {
//       // 3e️⃣ Case: revision date is today or in the future
//       const daysDiff = differenceInCalendarDays(rev.date, today);
//       const monthsDiff = differenceInMonths(rev.date, today);

//       // 3f️⃣ Add friendly labels based on how far in the future the revision is
//       if (daysDiff === 0) {
//         item.textContent = `${topic}, Today's date (${format(
//           today,
//           "do LLLL"
//         )})`;
//         // console.log(item.textContent);
//       } else if (monthsDiff === 2) {
//         item.textContent = `${topic}, Two months in the future (${format(
//           rev.date,
//           "do LLLL"
//         )})`;
//         // console.log(item.textContent);
//       } else if (monthsDiff === 5) {
//         item.textContent = `${topic}, 5 months in the future (${format(
//           rev.date,
//           "do LLLL"
//         )})`;
//         // console.log(item.textContent);
//       } else if (monthsDiff === 11) {
//         item.textContent = `${topic}, 11 months in the future (${format(
//           rev.date,
//           "do LLLL"
//         )})`;
//         // console.log(item.textContent);
//       } else {
//         item.textContent = `${topic}, ${format(rev.date, "do LLLL yyyy")}`;
//         // console.log(item.textContent);
//       }
//     }

//     list.appendChild(item); // 3g️⃣ Add the item to the list
//   });

//   topicDiv.appendChild(list); // 3h️⃣ Add the list to the topic container
//   agendaContainer.appendChild(topicDiv); // 3i️⃣ Add the topic container to the page
// }

// // 4️⃣ Example usage

// // 4a️⃣ Past date case (User 3 scenario)
// const pastDate = new Date(2025, 6, 26); // 26th July 2025
// generateRevisions("Codewars", pastDate);

// // 4b️⃣ Future date case (User 2 scenario)
// const futureDate = new Date(2025, 10, 5); // 5th November 2025
// generateRevisions("Variables in Python", futureDate);
