import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router";
import { Grid, Container, Box, Typography } from "@mui/material";
import JobsList from "../jobs/JobsList";
import ShowJob from "../jobs/ShowJob";
import style from "../../styles/home.module.css"

export default function Home() {
const params = useParams()



    

    
  return (
    
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
                className={style.showJob}
          >{
            Object.values(params) == "" ? 
            <Box textAlign="center" borderRadius="10px" paddingTop="100px" height="100vh" bgcolor="white" >
                <Typography component='h1' variant="p" color="#7f7f7f" fontSize="18px" width="50%" margin="auto">

                جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید.                </Typography>
        
            </Box> :

            <Routes>
              <Route path="/jobs/:slug/:id" element={<ShowJob />} />
            </Routes>
          }
          </Grid>
        </Grid>
      </Container>
   
  );
}
