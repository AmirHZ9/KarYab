import { Container, Grid } from "@mui/material";
import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center" mt={3}>

      <TailSpin
        height="100"
        width="100"
        color="#1565C0"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
       styles={{justifyContent:"center"}} 
        />
        </Grid>
    </Grid>
  );
}
