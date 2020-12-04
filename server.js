import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Cards from "./dbCards.js";

// app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:0jML0icOwrCWJEVA@cluster0.nwkaq.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// app.use.express.json();
//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("hello trirpi"));
app.post("/tinder/card", async (req, res) => {
  const dbCards = await req.body;
  console.log(dbCards, "asjfdaskjdhf");
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener``

app.listen(port, () => console.log(`listening on localhost :${port}`));

//0jML0icOwrCWJEVA
