import test from "node:test";
import { withMetaData } from "../src/index.js";

test("append timestamp to data object", (t) => {
	const params = { id: 4, itemId: 2, operation: "success" };
	const result = withMetaData(params);
	t.assert.ok("createdAt" in result);
});
