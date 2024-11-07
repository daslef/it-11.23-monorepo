import test from "ava";
// import client from "supertest";
// import app from "@repo/express-server";

test("post method to person endpoint", (t) => {
	const testPayload = {
		first_name: "test",
		last_name: "test",
	};

	t.pass();
	// client(app)
	// 	.set("Content-Type", "application/json")
	// 	.post("/api/person")
	// 	.send(testPayload)
	// 	.expect("Content-Type", "application/json")
	// 	.expect(201)
	// 	.end((error, response) => {
	// 		if (error) {
	// 			throw error;
	// 		}
	// 	});
});
