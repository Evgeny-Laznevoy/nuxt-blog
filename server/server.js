const express = require('express')
const mongoose = require('mongoose')
const consola = require('consola')
const path = require("path");
const { Nuxt, Builder } = require('nuxt')
const app = express()
mongoose.Schema.Types.Boolean.convertToFalse.add("");
const bodyParser = require('body-parser')
const port = 8100

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then((db) => console.log("[OK] DB is connected"))
.catch((err) => console.log(err))

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(bodyParser.json());
app.use(express.json());

app.use("/api/records", require("./routes/records"));
app.use("/api/services", require("./routes/services"));
app.use("/api/blog", require("./routes/blog"));
app.use("/api/wiki", require("./routes/wiki"));
app.use("/api/theme", require("./routes/theme"));
app.use('/', express.static(path.join(__dirname, '../dist')));

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
  console.log(`Example app listening at http://localhost:${port}`);
}

module.exports = {
  path: '/',
  handler: app
}

start()
