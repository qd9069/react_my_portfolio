import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* // <Card style={{ maxWidth: 550, margin: "0 auto", padding: "20px 5px" }} > */}
      <Card
        style={{ maxWidth: 650, padding: "20px 5px" }}
        sx={{ my: 7, ml: 9 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Name:
                </Typography>
                <TextField
                  // label="Name"
                  placeholder="Enter your name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Email address:
                </Typography>
                <TextField
                  // label="Email address"
                  placeholder="Enter email"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Message:
                </Typography>
                <TextField
                  // label="Message"
                  placeholder="Type your message here"
                  fullWidth
                  required
                  multiline
                  rows={10}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Card
        style={{ maxWidth: 650, padding: "20px 5px" }}
        sx={{ my: 7, ml: 9 }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 18 }}
            color="black"
            gutterBottom
            variant="h5"
          >
            Alternatively, feel free to contact me via phone number or email
            below
          </Typography>
          <IconButton
            color="primary"
            aria-label="Phone"
            href={`tel:8582678234`}
          >
            <PhoneIphoneIcon /> Phone: (858) 267 - 8234
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Email"
            href={`mailto:qdengliao@gmail.com`}
          >
            <AttachEmailIcon /> Email: qdengliao@gmail.com
          </IconButton>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
