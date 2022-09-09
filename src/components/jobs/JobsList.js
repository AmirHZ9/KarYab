import React from "react";
// graghql
import { useQuery } from "@apollo/client";
import { getJobs } from "../../graphql/query";
// style
import { Grid } from "@mui/material";
import Loader from "../Loader/Loader";
// pagination
import Paginating from "../paginating/Paginating";
// component
import JobCard from "../shared/JobCard";
export default function JobsList() {
  const { data } = useQuery(getJobs);

  if (!data) return <Loader />;

  return (
    <Grid container>
      {data.jobs.map((item, index) => (
        <JobCard jobs={item} index={index} key={item.id} />
      ))}

      <Grid item xs={12}>
        <Paginating />
      </Grid>
    </Grid>
  );
}
