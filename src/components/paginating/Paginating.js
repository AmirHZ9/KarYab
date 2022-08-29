import { Grid, Pagination } from '@mui/material'
import React from 'react'

export default function Paginating() {
  return (
    <Grid container>
        <Grid item xs={12} mt={3}>
         <Pagination count={10} shape="rounded" size="small"/>

        </Grid>

   
    </Grid>
  )
}
