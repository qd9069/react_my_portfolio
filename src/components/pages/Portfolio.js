import React from "react";
import Project from "../Project";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {/* for projects */}
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/doggo-meet-up.png"
              name="Doggo Meet Up"
              skills="JavaScript/Handlebars/CSS"
              repo="https://github.com/qd9069/doggo-meet-up"
              deployed="https://hidden-reaches-52880.herokuapp.com/"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/weather-dashboard.png"
              name="Weather Dashboard"
              skills="HTML/CSS/JavaScript/Bootstrap"
              repo="https://github.com/qd9069/weather_dashboard_server_apis_project"
              deployed="https://qd9069.github.io/weather_dashboard_server_apis_project/"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/code-quiz.png"
              name="Code Quiz"
              skills="HTML/CSS/JavaScript"
              repo="https://github.com/qd9069/code_quiz_api_project"
              deployed="https://qd9069.github.io/code_quiz_api_project/"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/unblock-unwind.png"
              name="Unblock-Unwind"
              skills="HTML/CSS/JavaScript/jQuery"
              repo="https://github.com/qd9069/unblock-unwind"
              deployed="https://christinaa126.github.io/unblock-unwind/"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/note_taker.png"
              name="Note Taker"
              skills="HTML/CSS/JavaScript/Express"
              repo="https://github.com/qd9069/note_taker_express_js_project"
              deployed="https://note-taker-express-js-123.herokuapp.com/"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Project
              img="/images/jate.png"
              name="J.A.T.E"
              skills="HTML/CSS/JavaScript/Express"
              repo="https://github.com/qd9069/jate_text_editor_project"
              deployed="https://fathomless-chamber-74811.herokuapp.com/"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
