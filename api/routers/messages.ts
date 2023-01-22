import { Router } from "express";

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
  res.send(`Messages' list will be here`);
});

messagesRouter.get("/:id", (req, res) => {
  res.send("A single message will be here");
});

messagesRouter.post("/", (req, res) => {
  res.send("Will create a new message here");
});

export default messagesRouter;