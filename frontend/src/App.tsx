import { Container, CssBaseline, Grid } from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import Messages from "./features/messages/Messages";

function App() {
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
              <Messages />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;