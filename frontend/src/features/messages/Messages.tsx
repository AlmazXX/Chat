import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MessageItem from "./components/MessageItem";
import { selectMessages } from "./messagesSlice";
import { fetchMessages } from "./messagesThunk";

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    const interval = setInterval(async () => {
      await dispatch(fetchMessages());
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, messages]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Messages</Typography>
      </Grid>
      <Grid item container direction="column" alignItems="center" spacing={2}>
        {messages.length ? messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        )) : <Typography variant="body2">No messages yet</Typography>}
      </Grid>
    </Grid>
  );
};

export default Messages;