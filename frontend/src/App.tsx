import { Container, CssBaseline, Grid } from "@mui/material";
import { MessageMutation } from "./types";
import { useAppDispatch } from "./app/hooks";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import MessageForm from "./features/messages/components/MessageForm";
import Messages from "./features/messages/Messages";
import { sendMessage } from "./features/messages/messagesThunk";

function App() {
  const dispatch = useAppDispatch()

  const onSubmit = (message: MessageMutation) => {
    dispatch(sendMessage(message))
  }

  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <MessageForm onSubmit={onSubmit} />
            </Grid>
            <Grid item>
              <Messages />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;