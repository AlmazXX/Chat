import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { MessageMutation } from "../../../types";
import { useAppSelector } from "../../../app/hooks";
import { selectMessageSending } from "../messagesSlice";

interface Props {
  onSubmit: (mutation: MessageMutation) => void;
}

const MessageForm: FC<Props> = ({ onSubmit }) => {
  const sending = useAppSelector(selectMessageSending);
  const [state, setState] = useState<MessageMutation>({
    author: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(state);
    setState({
      author: "",
      message: "",
    });
  };

  return (
    <form autoComplete="off" onSubmit={onFormSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            id="author"
            name="author"
            label="Author"
            value={state.author}
            onChange={onChange}
            required
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
            required
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={sending}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;