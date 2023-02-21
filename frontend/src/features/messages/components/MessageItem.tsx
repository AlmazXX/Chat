import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC } from "react";
import { Message } from "../../../types";

interface Props {
  message: Message;
}

const MessageItem: FC<Props> = ({ message }) => {
  const date = () => {
    const currentDatetime = new Date();

    const isToday = () =>
      dayjs(currentDatetime).format("DD.MM.YYYY") ===
      dayjs(message.datetime).format("DD.MM.YYYY");

    const isYesterday = () =>
      dayjs(
        new Date(currentDatetime.setDate(currentDatetime.getDate() - 1))
      ).format("DD.MM.YYYY") === dayjs(message.datetime).format("DD.MM.YYYY");

    const isCurrentYear = () =>
      currentDatetime.getFullYear() ===
      new Date(message.datetime).getFullYear();

    return {
      getDate: () => {
        if (isToday()) {
          return dayjs(message.datetime).format("HH:mm");
        }

        if (isYesterday()) {
          return `Yesterday, ${dayjs(message.datetime).format("HH:mm")}`;
        }

        if (isCurrentYear()) {
          return dayjs(message.datetime).format("DD.MM HH:mm");
        }

        return dayjs(message.datetime).format("DD.MM.YYYY HH:mm");
      },
    };
  };

  return (
    <Grid item sx={{ width: "100%" }}>
      <Card>
        <CardContent>
          <Typography variant="h5">{message.author}</Typography>
          <Typography variant="body2" color="text.secondaty" sx={{ mb: 1.5 }}>
            {date().getDate()}
          </Typography>
          <Typography variant="body2" color="text.secondaty">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MessageItem;