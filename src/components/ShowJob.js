import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { getJobs } from '../graphql/query'

export default function ShowJob() {
    const {data,loading,error} = useQuery(getJobs)
   
  return (
    <Grid container >
        <Grid item xs={12} textAlign="center" bgcolor="white" borderRadius="10px" minHeight="100vh"  >
                <Typography component="p" variant="p" width="50%" color="#8e9cb2" margin=" auto" mt={5}>
                جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید. 
                </Typography>
        </Grid>
        
    </Grid>
  )
}
