import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h1">Home</Typography>
        </Grid>

        <Grid item>
          <Timer min={0} max={60} start={60} type="countdown" />
        </Grid>
      </Grid>
    </Container>
  );
}
