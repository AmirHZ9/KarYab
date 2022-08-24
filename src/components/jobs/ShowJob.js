import { useQuery } from "@apollo/client";
import JobsList from "./JobsList";
import { Grid, Typography, Container} from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { getJobData } from "../../graphql/query";

export default function ShowJob() {
  const params = useParams();
  const slug = params.slug;
  const { data, loading, error } = useQuery(getJobData, {
    variables: { slug },
  });

  if (!data) return <h1>loading</h1>;
  return (
    <Container>

    <Grid container  mt={3}>
      <Grid item xs={12} md={4} pl={2}>
        <JobsList />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        textAlign="center"
        bgcolor="white"
        borderRadius="10px"
        minHeight="100vh"
      >
        <Typography
          component="p"
          variant="p"
          width="50%"
          color="#8e9cb2"
          margin=" auto"
          mt={5}
        >
          {data.job.jobTitle}
        </Typography>
      </Grid>
    </Grid>
        </Container>
  );
}
