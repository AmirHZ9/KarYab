import React from "react";
import { Route, Routes } from "react-router";
import { Grid, Container } from "@mui/material";
import JobsList from "../jobs/JobsList";
import ShowJob from "../jobs/ShowJob";


export default function Home() {
    
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container mt={3} minHeight="100vh" mb={3}>
          <Grid item xs={12} md={4} pl={2}>
            <JobsList />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            borderRadius="10px"

          >
            <Routes>
              <Route path="/job/:slug/:id" element={<ShowJob />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
