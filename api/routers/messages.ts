import { Router } from "express";
import fileDb from "../fileDb";

const messagesRouter = Router();

messagesRouter.get("/", async(req, res) => {
  const messages = await fileDb.getItems();
  const newMessages = messages.slice(-30)
  res.send(newMessages)
});

messagesRouter.get("/:id", (req, res) => {
  res.send("A single message will be here");
});

messagesRouter.post("/", (req, res) => {
  res.send("Will create a new message here");
});

export default messagesRouter;