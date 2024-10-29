import express from 'express'
import bodyParser from 'body-parser'
import db from "@repo/database"
// import { usersTable } from "@repo/database/schema"

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/person", async (req, res) => {
	const { first_name, last_name } = req.body;
	console.log(db, first_name, last_name)
	// await db
	// 	.insert(usersTable)
	// 	.values({ first_name, last_name, created_at: Date.now() });
	res.sendStatus(201);
});

app.listen(3000);
