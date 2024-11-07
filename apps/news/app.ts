import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/:quantity/news/for/:category", async (req, res) => {
	const { quantity, category } = req.params;
	const news = [
		{
			title: "Новость важная",
			category: "Авто",
		},
		{
			title: "Новость актуальная",
			category: "Здоровье",
		},
	];
	res.render("index", { news, quantity, category });
});

app.listen(3000);

export default app;
