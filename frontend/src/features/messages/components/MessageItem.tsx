import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC } from "react";
import { Message } from "../../../../../types";

interface Props {
  message: Message;
}

const MessageItem: FC<Props> = ({ message }) => (
  <Grid item sx={{ width: "100%" }}>
    <Card>
      <CardContent>
        <Typography variant="h5">{message.author}</Typography>
        <Typography variant="body2" color="text.secondaty" sx={{ mb: 1.5 }}>
          {dayjs(message.datetime).format("DD.MM.YYYY HH:mm")}
        </Typography>
        <Typography variant="body2" color="text.secondaty">
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default MessageItem;