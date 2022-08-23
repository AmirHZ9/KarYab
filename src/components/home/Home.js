import React from "react";
import { Grid, Container } from "@mui/material";
import JobsList from "../jobs/JobsList";
import ShowJob from "../jobs/ShowJob";
import { Routes,Route } from "react-router";

export default function Home() {
  return (
    <div>
      <Container maxWidth="lg" >
        <Grid container mt={3} spacing={2} minHeight="100vh">
          <Grid item xs={12} md={4} >
            <JobsList />
          </Grid>

          <Grid item xs={12} md={8} >
              <Routes>
                  <Route path="/job/:slug" element={<ShowJob />}/>
              </Routes>
         
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
