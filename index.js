const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.set('views', 'views');

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/form-submit", (req, res) => {
  const { name, email } = req.body;
  axios.post("https://hooks.slack.com/services/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", {
    text: `name: ${name}, email: ${email}`
  })
    .then(() => res.send("Form submitted"))
    .catch(() => res.send("Form cannot submitted"))
})


const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`App listening at PORT:${PORT}`))
