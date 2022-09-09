import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./shared/JobCard";

export default function MarkedJob() {
  const jobs = useSelector((state) => state.markJobState);
  console.log(jobs.markJob);

  if(!jobs.markJob.length) return  (
      <Grid container >
            <Grid item textAlign="center" xs={12} minHeight="100vh" >
                <Typography component="p" variant="h3" sx={{position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',color:"#7f7f7f"}}>
                    آگهی نشان نشده است
                </Typography>
            </Grid>

      </Grid>
  )
  return (
    <div>
      {jobs.markJob.map((job) => (
        <JobCard jobs={job} key={job.id} />
      ))}
    </div>
  );
}
