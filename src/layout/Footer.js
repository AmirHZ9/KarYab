import {Container, Typography,  Grid } from "@mui/material";

import React from "react";

export default function Footer() {
  return (
    <div>

        <Grid container>
          <Grid item xs={12} bgcolor="gray" textAlign="center">
            <Typography comonent="p" variant="p" color="white">
              karyab
            </Typography>
          </Grid>
        </Grid>

    </div>
  );
}
