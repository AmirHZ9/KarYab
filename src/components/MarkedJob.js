import React from "react";
// style
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
// component
import JobCard from "./shared/JobCard";
// redux
import { useSelector } from "react-redux";

export default function MarkedJob() {
  const jobs = useSelector((state) => state.markJobState);

  if (!jobs.markJob.length)
    return (
      <Grid container>
        <Grid item textAlign="center" xs={12} minHeight="100vh">
          <Typography
            component="p"
            variant="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              color: "#7f7f7f",
            }}
          >
            آگهی نشان نشده است
          </Typography>
        </Grid>
      </Grid>
    );
  return (
    <Container sx={{minHeight:"100vh"}}>
      <Grid container mt={2}>
        {jobs.markJob.map((job) => (
          <JobCard jobs={job} key={job.id} />
        ))}
      </Grid>
    </Container>
  );
}
