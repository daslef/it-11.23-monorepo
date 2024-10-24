const express = require("express");
const bodyParser = require("body-parser");

const db = require('database').default;
const { usersTable } = require("@repo/database/schema");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/person", async (req, res) => {
	const { first_name, last_name } = req.body
	await db.insert(usersTable).values({first_name, last_name, created_at: Date.now() })
	res.sendStatus(201);
});

app.listen(3000);
