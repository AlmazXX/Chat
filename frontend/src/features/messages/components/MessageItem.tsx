import { Card, CardContent, Grid, Typography } from "@mui/material";

const MessageItem = () => (
  <Grid item sx={{width: '100%'}}>
    <Card>
      <CardContent>
        <Typography variant="h5">author</Typography>
        <Typography variant="body2" color='text.secondaty' sx={{mb:1.5}}>datetime</Typography>
        <Typography variant="body2" color='text.secondaty'>Messages</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default MessageItem;