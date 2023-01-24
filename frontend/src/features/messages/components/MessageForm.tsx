import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { MessageMutation } from "../../../../../types";

interface Props {
  onSubmit: (mutation: MessageMutation) => void;
}

const MessageForm: FC<Props> = ({ onSubmit }) => {
  const [state, setState] = useState<MessageMutation>({
    author: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form autoComplete="off">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            id="author"
            name="author"
            label="Author"
            value={state.author}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={3}
            value={state.message}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary" variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;