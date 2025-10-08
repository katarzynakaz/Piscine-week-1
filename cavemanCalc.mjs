const calculation = () => {
	let firstDateValue = firstDate.value;
	let originalYear = Number(firstDateValue.split("-")[0]);
	let originalMonth = Number(firstDateValue.split("-")[1]);
	let originalDay = Number(firstDateValue.split("-")[2]);

	// single declaration
	let daysToAdd = originalMonth % 2 === 0 || originalMonth === 7 ? 31 : 30;

	let newDay = originalDay + daysToAdd;
	let daysInMonth = originalMonth % 2 === 0 || originalMonth === 7 ? 31 : 30;

	if (newDay > daysInMonth) {
		newDay -= daysInMonth;
		originalMonth += 1;
	}

	if (originalMonth > 12) {
		originalMonth = 1;
		originalYear += 1;
	}

	let firstRevisionDate =
		originalYear +
		"-" +
		String(originalMonth).padStart(2, "0") +
		"-" +
		String(newDay).padStart(2, "0");

	console.log("First revision date:", firstRevisionDate);
	return firstRevisionDate;
};
export { calculation };

// this does not work for feb
