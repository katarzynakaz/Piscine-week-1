import { getUserIds } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";
import { cleanInput } from "./form.mjs";

test("User count is correct", () => {
	assert.equal(getUserIds().length, 5);
});
