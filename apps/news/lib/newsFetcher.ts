export default function (category) {
	const url = `https://api.rss2json.com/v1/api.json?rss_url=https://www.vedomosti.ru/rss/rubric/${category}`;

	fetch(url)
		.then((res) => {
			if (res.ok) {
				throw new Error("Server Error");
			}
			return res.json();
		})
		.then((data) => {
			return data;
		});
}
