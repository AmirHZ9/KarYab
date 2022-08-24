import {
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Typography,
  Container,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import CooprationType from "./CooprationType";
export default function Post() {
  const [postData, setPostData] = useState({
    company: "",
    jobTitle: "",
    text: "",
  });
  const Days = [
    "شنبه",
    "یکشنیه",
    "دوشنبه",
    "سهشنبه",
    "چهارشنبه",
    "پنحشنبه",
    "جمعه",
  ];

  const changeHandler = () => {};
  const focusHandler = () => {};
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={2} mb={2}>
        <Grid item xs={12}>
          <TextField
            label="عنوان شغل"
            variant="outlined"
            sx={{ width: "100%" }}
            value={postData.jobTitle}
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label=" عنوان شرکت "
            variant="outlined"
            sx={{ width: "100%" }}
            value={postData.company}
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">حوزه کاری</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="حوزه کاری"
            >
              <MenuItem value="develope">برنامه نویس</MenuItem>
              <MenuItem value="Accountants">حسابدار</MenuItem>
              <MenuItem value="memari">معماری</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              حداقل سابقه کار
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="حداقل سابقه کار"
            >
              <MenuItem value="notImportant">مهم نیست</MenuItem>
              <MenuItem value="lessThan3">کمتر از 3 سال</MenuItem>
              <MenuItem value="between 3 and 6">بین 3 تا 6 سال</MenuItem>
              <MenuItem value="more than 6">بیشتر از 6 سال</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <br />
          <FormControl sx={{ width: "50%", marginRight: "15px" }}>
            <InputLabel id="demo-simple-select-label">از روز</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="از روز"
            >
              {Days.map((day) => (
                <MenuItem value={day}>{day}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label"> تا روز</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="تا روز"
            >
              {Days.map((day) => (
                <MenuItem value={day}>{day}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <CooprationType />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="شرح موقعیت شغلی"
            variant="outlined"
            sx={{ width: "100%" }}
            value={postData.text}
            name="text"
            onFocus={focusHandler}
            onChange={changeHandler}
            multiline
            minRows={4}
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            label="معرفی شرکت"
            variant="outlined"
            sx={{ width: "100%" }}
            value={postData.text}
            name="text"
            onFocus={focusHandler}
            onChange={changeHandler}
            multiline
            minRows={4}
          />
        </Grid>

        <Grid xs={12} m={2}>
          <Button variant="contained">ارسال</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
