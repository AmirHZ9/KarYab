import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function ConfirmationPostedJob() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        minHeight="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={7}
          bgcolor="white"
          border="1px solid silver"
          borderRadius="15px"
          textAlign="center"
          boxShadow="3"
          p={5}
        >
          <Typography component="p" variant="h4" color="green">
            اگهی شما با موفقیت ارسال شد و منتظر تایید ناظر است.
          </Typography>
          <Box component="div" mt={3}>
            <Link to="/">
              <Button
                variant="contained"
                sx={{ fontWeight: "700", marginLeft: "20px" }}
              >
                بازگشت به صفحه اصلی
              </Button>
            </Link>
            <Link to="/newJob">
              <Button variant="contained" sx={{ fontWeight: "700" }}>
                اگهی جدید
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
