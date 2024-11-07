import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/:quantity/news/for/:category", async (req, res) => {
	const { quantity, category } = req.params;
	res.send({ quantity, category });
});

app.listen(3000);

export default app;
