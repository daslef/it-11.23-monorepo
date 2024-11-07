import { PrismaClient } from "@repo/database";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/person", async (req, res) => {
	const { age, ...fields } = req.body;

	const prismaClient = new PrismaClient();

	const users = await prismaClient.users_table.create({
		data: { ...fields, age: Number(age) },
	});

	res.send(users);
});

app.listen(3000);

export default app;
