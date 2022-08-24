import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Grid container display="flex" alignItems="center">
          <Grid item xs={8}>
            <Box component="ul" sx={{ display: "flex", listStyle: "none" }}>
              <Box component="li" margin="0 20px">
                فرصت های شغلی
              </Box>
              <Box component="li" margin="0 20px">
                محصولات
              </Box>
              <Box component="li" margin="0 20px">
                {" "}
                فرصت های شغلی پیشنهادی
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Link to="/newJob">اگهی جدید</Link>
          </Grid>
          <Grid item>
            <Typography component="span" variant="p">
              Karyab
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
