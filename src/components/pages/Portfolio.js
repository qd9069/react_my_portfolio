import React from "react";
import Project from "../Project";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import doggo from '../images/doggo-meet-up.png';
import weather from '../images/weather-dashboard.png';
import codeQuiz from '../images/code-quiz.png';
import unblockUnwind from '../images/unblock-unwind.png';
import noteTaker from '../images/note_taker.png';
import jate from '../images/jate.png';
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Portfolio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 7 }}>
        <Box
          sx={{ bgcolor: "#ecf0f1", padding: "3px 20px", borderRadius: "16px" }}
        >
          <h1>Portfolio</h1>
          {/* for projects */}
          <Container maxWidth="md" sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Project
                  img={doggo}
                  name="Doggo Meet Up"
                  skills="JavaScript/Handlebars/CSS"
                  repo="https://github.com/qd9069/doggo-meet-up"
                  deployed="https://hidden-reaches-52880.herokuapp.com/"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Project
                  img={weather}
                  name="Weather Dashboard"
                  skills="HTML/CSS/JavaScript/Bootstrap"
                  repo="https://github.com/qd9069/weather_dashboard_server_apis_project"
                  deployed="https://qd9069.github.io/weather_dashboard_server_apis_project/"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Project
                  img={codeQuiz}
                  name="Code Quiz"
                  skills="HTML/CSS/JavaScript"
                  repo="https://github.com/qd9069/code_quiz_api_project"
                  deployed="https://qd9069.github.io/code_quiz_api_project/"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Project
                  img={unblockUnwind}
                  name="Unblock-Unwind"
                  skills="HTML/CSS/JavaScript/jQuery"
                  repo="https://github.com/qd9069/unblock-unwind"
                  deployed="https://christinaa126.github.io/unblock-unwind/"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Project
                  img={noteTaker}
                  name="Note Taker"
                  skills="HTML/CSS/JavaScript/Express"
                  repo="https://github.com/qd9069/note_taker_express_js_project"
                  deployed="https://note-taker-express-js-123.herokuapp.com/"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Project
                  img={jate}
                  name="J.A.T.E"
                  skills="HTML/CSS/JavaScript/Express"
                  repo="https://github.com/qd9069/jate_text_editor_project"
                  deployed="https://fathomless-chamber-74811.herokuapp.com/"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}
