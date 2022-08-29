import React, { useState, useEffect } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import style from "../../styles/jobCard.module.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FactCheckIcon from "@mui/icons-material/FactCheck";
export default function JobCard({ jobs }) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState();


  useEffect(() => {
   window.screen.width <= 900 ? setIsMobile(true) : setIsMobile(false);
    window.innerWidth <= 900 ? setIsMobile(true) : setIsMobile(false)
  }, [window.innerWidth]);

  const detectWindowSize = () => {
    window.innerWidth <= 900 ? setIsMobile(true) : setIsMobile(false);
  
  };
  window.onresize = detectWindowSize;
console.log(window.innerWidth)
console.log(isMobile)


  return (
    <Grid container>
      <Link
        to={
          isMobile
            ? `/jobs/job/${jobs.slugs}/${jobs.id}`
            : `/jobs/${jobs.slugs}/${jobs.id}`
        }
        style={{ width: "100%", color: "black", textDecoration: "none" }}
        key={jobs.id}
      >
        <Grid
          item
          sx={{
            display: "flex",
            borderRadius: "0 10px 10px 0",
            padding: "15px",
            width: "100%",
            borderLeft: "3px solid #1565c0",
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
              {jobs.jobTitle}
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
                {jobs.company}
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
                {jobs.citys}{" "}
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
                {jobs.cooprationType.split(",")[0]}{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Link>
    </Grid>
  );
}
