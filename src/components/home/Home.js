import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import JobsList from "../jobs/JobsList";


export default function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container mt={3}   minHeight="100vh">
          <Grid item xs={12} md={4} pl={2}>
            <JobsList />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            textAlign="center"
            borderRadius="10px"
            minHeight="100vh"
                bgcolor="white"
            >
            <Typography
              component="p"
              variant="p"
              width="50%"
              color="#8e9cb2"
              margin=" auto"
              mt={5}
            >
              asdf
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
