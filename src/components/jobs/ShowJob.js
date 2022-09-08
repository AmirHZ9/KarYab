import { useQuery } from "@apollo/client";
import { Grid, Typography, Container, Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getJobData } from "../../graphql/query";
import ApartmentIcon from "@mui/icons-material/Apartment";
import parse from 'html-react-parser';
import Loader from "../Loader/Loader";
import '../../styles/scrollBar.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { isInMarked } from "../../func/function";
import { markJob,removeMark } from "../../redux/markJobCard/markAction";
import { useDispatch, useSelector } from 'react-redux'

export default function ShowJob() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch()
  const markedJob = useSelector(state => state.markJobState.markJob)

  const { data } = useQuery(getJobData, {
    variables: { id },
  });

  if (!data) return <Loader/>;

  console.log(  isInMarked(markedJob,data.job) )

  const {
    company,
    enCompany,
    citys,
    category,
    companyDescription,
    cooprationType,
    description,
    jobTitle,
    experience,
    salary,
    sex,
    militaryService,
    degree,
    technology,
  } = data.job;
  const technologgies = technology.split(",");
  const militaries = militaryService.split(",");
  return (
    <Container>
      {/* // * company details */}
      <Grid container mb={3} borderRadius="10px" bgcolor="white" p={3} display="flex" justifyContent="space-between" alignItems="center">
        <Grid item display="flex" alignItems="center">
          <Avatar sx={{ width: "80px", height: "70px" }}>
            <ApartmentIcon />
          </Avatar>
          <Typography component="p" variant="p" marginRight="10px">
            {company} | {enCompany}
          </Typography>
        </Grid>
        <Grid item >
          {
            isInMarked(markedJob,data.job) ? <Button variant="outlined" onClick={()=>dispatch(removeMark(data.job))}>
            نشان شده <StarBorderIcon color="warning"/>   
           </Button> : <Button variant="outlined" onClick={()=>dispatch(markJob(data.job))}>
           نشان کردن <StarBorderIcon/>   
          </Button>
          }
         
          </Grid>
      </Grid>
      {/* // ? job Details */}
      <Grid container className="jobDetail" bgcolor="white" borderRadius="10px" mb={2} maxHeight="100vh">
        <Grid item xs={12} p={3} borderBottom="1px dotted silver">
          <Typography component="p" variant="p" fontSize="25px" color="#555">
            {jobTitle}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            دسته بندی شغلی
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {category}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            موقعیت مکانی
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {citys}
          </Typography>
        </Grid>
        
        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            نوع همکاری
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {cooprationType}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            حداقل سابقه کار
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {experience}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            حقوق
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {salary}
          </Typography>
        </Grid>

        <Grid item xs={12} p={3}>
          <Typography
            componene="p"
            color="#555555"
            fontSize="18px"
            fontWeight={600}
            variant="p"
          >
            شرح موقعیت شغلی
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            padding="0 8px"
            color="#555555"
            fontSize="15px"
          >
            {
              parse(description)
            } 
          </Typography>
        </Grid>

        <Grid item xs={12} p={3}>
          <Typography
            componene="p"
            color="#555555"
            fontSize="18px"
            fontWeight={600}
            variant="p"
          >
            معرفی شرکت
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            padding="0 8px"
            color="#555555"
            fontSize="15px"
          >
            {companyDescription}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            مهارت ها مورد نیاز
          </Typography>
          <br />

          {technologgies.map((item) => (
            <Typography
              component="p"
              variant="p"
              bgcolor="#555555"
              color="white"
              padding="5px 8px"
              borderRadius="3px"
              fontSize="13px"
              display="inline-block"
              margin="1px"
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            جنسیت
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {sex}
          </Typography>
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            وضعیت نظام وظیفه
          </Typography>
          <br />
          {militaries.map((item) => (
            <Typography
              component="p"
              variant="p"
              bgcolor="#555555"
              color="white"
              padding="5px 8px"
              borderRadius="3px"
              fontSize="13px"
              display="inline-block"
              margin="1px"
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} p={3}>
          <Typography componene="p" variant="p">
            حداقل مدرک تحصیلی
          </Typography>
          <br />
          <Typography
            component="p"
            variant="p"
            bgcolor="#555555"
            color="white"
            padding="5px 8px"
            borderRadius="3px"
            fontSize="13px"
            display="inline-block"
          >
            {degree}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
