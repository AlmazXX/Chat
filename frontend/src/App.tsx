import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Messages />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;