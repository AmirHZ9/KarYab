import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import { getJobData } from '../../graphql/query'
export default function ShowJob() {
  const params = useParams()
  const slug = params.slug
  const {data,loading,error} = useQuery(getJobData,({
    variables:{slug}
  }))
  console.log(data.jobTitle)
  return (
    <Grid container >
        <Grid item xs={12} textAlign="center" bgcolor="white" borderRadius="10px" minHeight="100vh"  >
                <Typography component="p" variant="p" width="50%" color="#8e9cb2" margin=" auto" mt={5}>
       {data.job.jobTitle}
                </Typography>
        </Grid>
        
    </Grid>
  )
}
