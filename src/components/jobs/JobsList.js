import React from "react";
import { useQuery } from "@apollo/client";
import { getJobs } from "../../graphql/query";
import { Grid  } from "@mui/material";
import Loader from "../Loader/Loader";
import Paginating from "../paginating/Paginating";
import JobCard from "./JobCard";

export default function JobsList() {
  const { data } = useQuery(getJobs);

  if (!data) return <Loader />;

  return (
    <Grid container>
      {data.jobs.map((item) => (
        <JobCard jobs={item} key={item.id} />
      ))}

      <Grid item xs={12}>
        <Paginating />
      </Grid>
    </Grid>
  );
}
