import React from "react";
import { Grid, Container } from "@mui/material";
import JobsList from "../jobs/JobsList";
import ShowJob from "../ShowJob";

export default function Home() {
  return (
    <div>
      <Container maxWidth="lg" >
        <Grid container mt={3} spacing={2}>
          <Grid item xs={12} md={4} >
            <JobsList />
          </Grid>

          <Grid item xs={12} md={8} >
            <ShowJob />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
