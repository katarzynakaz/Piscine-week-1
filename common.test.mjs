import { getUserIds } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("User count is correct", () => {
	assert.equal(getUserIds().length, 5);
});

function filterAndSortFutureDates(data, today = null) {
	const current = today ? new Date(today) : new Date();
	return data
		.filter((entry) => new Date(entry.date) >= current)
		.sort((a, b) => new Date(a.date) - new Date(b.date));
}

test("filters out past dates and sorts future dates ascending", () => {
	const today = "2025-10-10";
	const data = [
		{ topic: "Past", date: "2025-10-09" },
		{ topic: "Today", date: "2025-10-10" },
		{ topic: "Future2", date: "2025-10-12" },
		{ topic: "Future1", date: "2025-10-11" },
	];

	const result = filterAndSortFutureDates(data, today);

	assert.deepEqual(
		result.map((d) => d.topic),
		["Today", "Future1", "Future2"]
	);
	assert.deepEqual(
		result.map((d) => d.date),
		["2025-10-10", "2025-10-11", "2025-10-12"]
	);
});
