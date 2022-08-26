import React from "react";
import { useQuery } from "@apollo/client";
import { getJobs } from "../../graphql/query";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../styles/jobCard.module.css"
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FactCheckIcon from "@mui/icons-material/FactCheck";
export default function JobsList() {
  const { data, loading, error } = useQuery(getJobs);

  console.log(data);
  if (!data) return <h1>loading</h1>;
  return (
    <Grid container>
      {data.jobs.map((item) => (
        <Link
          to={`/job/${item.slugs}/${item.id}`}
          style={{ width: "100%", color: "black", textDecoration: "none" }}
          key={item.id}
        >
          <Grid
            item
            sx={{
              display: "flex",
              borderRadius: "0 10px 10px 0",
              padding: "15px",
              width: "100%",
              borderLeft:"3px solid #1565c0"
            }}
            mb={2}
            bgcolor="white"
            className={style.jobCard}
            
          >
            <Avatar></Avatar>
            <Box component="div" marginRight="12px">
              <Typography
                component="p"
                variant="span"
                fontSize="14px"
                color="primary"
              >
                {item.jobTitle}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ApartmentIcon
                  sx={{ color: "#555", fontSize: "15px", marginLeft: "5px" }}
                />
                <Typography
                  component="p"
                  variant="p"
                  fontSize="10px"
                  fontWeight={400}
                  mt={1}
                >
                  {item.company}{" "}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon
                  sx={{ color: "#555", fontSize: "15px", marginLeft: "5px" }}
                />
                <Typography
                  component="p"
                  variant="p"
                  fontSize="10px"
                  fontWeight={400}
                  mt={1}
                >
                  {item.citys}{" "}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FactCheckIcon
                  sx={{ color: "#555", fontSize: "15px", marginLeft: "5px" }}
                />
                <Typography
                  component="p"
                  variant="p"
                  fontSize="10px"
                  fontWeight={400}
                  mt={1}
                >
                  {item.cooprationType.split(",")[0]}{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
