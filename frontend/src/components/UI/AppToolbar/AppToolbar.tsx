import { AppBar, Toolbar, Typography } from "@mui/material";

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "#fff" }}
        >
          Chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;