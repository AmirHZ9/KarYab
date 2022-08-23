import React from "react";
import { useQuery } from "@apollo/client";
import { getJobs } from "../../graphql/query";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function JobsList() {
  const { data, loading, error } = useQuery(getJobs);

  console.log(data);
  if (!data) return <h1>loading</h1>;
  return (
    <Grid container>
      {data.jobs.map((item) => (
        <Link to="" style={{ width: "100%",color:"black",textDecoration:"none" }} key={item.id}>
          <Grid
            item
            sx={{display:"flex", borderRadius:"10px", padding: "15px", width: "100%" }}
            mb={2}
           bgcolor="white"
          >
            <Avatar></Avatar>
          <Box component="div" textAlign="right" marginRight="12px">

            <Typography component="p" variant="span" fontWeight={700} fontSize="13px"> 
              {item.jobTitle}
              </Typography> 
            <Typography component="p" variant="p" fontSize='10px' fontWeight={700} mt={1}>{item.company} </Typography>
          </Box>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
