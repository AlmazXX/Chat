import { Router } from "express";
import fileDb from "../fileDb";
import { MessageWithoutID } from "../../types";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  const queryDate = req.query.datetime as string
  const date = new Date(queryDate);
  if (isNaN(date.getDate()) && queryDate) {
    return res.status(400).send({error: 'Invalid datetime'})
  }

  const messages = await fileDb.getItems();
  const newMessages = queryDate ? messages.filter(m => new Date(m.datetime) > new Date(queryDate)).slice(-30) : messages.slice(-30);
  res.send(newMessages);
});

messagesRouter.get("/:id", async (req, res) => {
  const messages = await fileDb.getItems();
  const message = messages.find((m) => m.id === req.params.id);
  res.send(message);
});

messagesRouter.post("/", async (req, res) => {
  if (!req.body.message || !req.body.author) {
    return res
      .status(400)
      .send({ error: "Author and message must be present in the request" });
  }

  const message: MessageWithoutID = {
    message: req.body.message,
    author: req.body.author,
    datetime: new Date().toISOString(),
  };
  const savedMessage = await fileDb.addItem(message);
  res.send(savedMessage);
});

export default messagesRouter;