import test from "node:test";
import { parseArrayEntries } from "../src/index.js";

test("parse correct pair of entries", (t) => {
	const params = [
		["id", 7],
		["hash", "hsk471"],
	];
	const expected = { id: 7, hash: "hsk471" };
	t.assert.deepStrictEqual(parseArrayEntries(params), expected);
});
