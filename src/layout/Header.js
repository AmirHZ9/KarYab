import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import style from "../styles/header.module.css";

export default function Header() {
  return (
    <AppBar className={style.header} position="sticky" color="inherit">
      <Container maxWidth="lg">
        <Grid container justifyContent="flex-start" pt={2}>
          <Grid item xs={4} md={8}>
            <MenuIcon className={style.sidebarIcon} color="primary" />
            <Box component="ul" className={style.rightSection} p={0} m={0}>
              <Box component="li" margin="0  20px  ">
                <Link to="/">فرصت های شغلی</Link>
              </Box>
              <Box component="li" margin="0 20px">
                <Link to="">محصولات</Link>
              </Box>
              <Box component="li" margin="0 20px">
                <Link to="">فرصت های شغلی پیشنهادی</Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link to="/newJob">
              <Button variant="contained" >
                آگهی جدید <AddCircleOutlineIcon />
              </Button>
            </Link>

            <Typography  mr={5} fontWeight={700}>
              <Link to="/">Karyab</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
