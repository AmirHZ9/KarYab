import {Typography,  Grid } from "@mui/material";

import React from "react";

export default function Footer() {
  return (
    <>

        <Grid container>
          <Grid item xs={12} p={2} bgcolor="#1976D2" textAlign="center">
            <Typography comonent="p" variant="p" color="white" fontWeight={700}>
              پروژه سایت کاریابی با graphQL
            </Typography>
          </Grid>
        </Grid>

    </>
  );
}
