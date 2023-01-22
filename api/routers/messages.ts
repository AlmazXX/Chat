import { Router } from "express";
import fileDb from "../fileDb";
import { MessageWithoutID } from "../types";

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  const messages = await fileDb.getItems();
  const newMessages = messages.slice(-30);
  res.send(newMessages);
});

messagesRouter.get("/:id", async (req, res) => {
  const messages = await fileDb.getItems();
  const message = messages.find((m) => m.id === req.params.id);
  res.send(message);
});

messagesRouter.post("/", async (req, res) => {
  const message: MessageWithoutID = {
    message: req.body.message,
    author: req.body.author,
    datetime: new Date().toISOString(),
  };
  const savedMessage = await fileDb.addItem(message);
  res.send(savedMessage);
});

export default messagesRouter;