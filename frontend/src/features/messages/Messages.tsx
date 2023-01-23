import { Grid, Typography } from "@mui/material";

const Messages = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Messages</Typography>
      </Grid>
      <Grid item container direction='column' alignItems='center' spacing={2}>
        Messages' list
      </Grid>
    </Grid>
  );
};

export default Messages;