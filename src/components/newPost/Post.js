import React, { useState } from "react";
//styles
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Container,
  Button,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { SENDJOB } from "../../graphql/mutation";
import RTL from "../../Shared/RTl";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Post() {
  const types = ["دورکاری", "تمام وقت", "حضوری", "پاره وقت"];
  const [cooprationType, setCooprationType] = useState([]);
  const [sendData, setSendData] = useState(true);
  const [postData, setPostData] = useState({
    company: "",
    jobTitle: "",
    description: "",
    category: "",
    companyDiscription: "",
    experience: "",
  });

  const [sendJob, { loading, data, error }] = useMutation(SENDJOB, {
    variables: {
      company: postData.company,
      jobTitle: postData.jobTitle,
      cooprationType: cooprationType.toString(),
      description: postData.description,
      category: postData.category,
      companyDescription: postData.companyDiscription,
      slugs: postData.company,
    },
  });

  const changeHandler = (event) => {
    if (event.target.name === "cooprationType") {
      const {
        target: { value },
      } = event;
      setCooprationType(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const focusHandler = () => {};
  const sendHandler = (event) => {
    setPostData({
      company: "",
      jobTitle: "",
      description: "",
      category: "",
      companyDiscription: "",
      experience: "",
    });
    setCooprationType([]);
    sendJob();
    setSendData(true)
};
if (data && sendData) {
    toast.success(" اگهی ارسال شد و منتظر تایید است");
  console.log(data)
    setSendData(false);
  } 

  return (
    <RTL>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item xs={12}>
            <TextField
              label="عنوان شغل"
              variant="outlined"
              sx={{ width: "100%" }}
              value={postData.jobTitle}
              name="jobTitle"
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
              name="company"
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
                name="category"
                value={postData.category}
                onChange={changeHandler}
              >
                <MenuItem value="برنامه نویس">برنامه نویس</MenuItem>
                <MenuItem value="حسابدار">حسابدار</MenuItem>
                <MenuItem value="معماری">معماری</MenuItem>
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
                value={postData.experience}
                name="experience"
                onChange={changeHandler}
              >
                <MenuItem value="notImportant">مهم نیست</MenuItem>
                <MenuItem value="کمتر از 3 سال">کمتر از 3 سال</MenuItem>
                <MenuItem value="بین 3 تا 6 سال">بین 3 تا 6 سال</MenuItem>
                <MenuItem value="بیشتر از 6 سال">بیشتر از 6 سال</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">نوع همکاری</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={cooprationType}
                onChange={changeHandler}
                label="نوع همکاری"
                name="cooprationType"
              >
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="شرح موقعیت شغلی"
              variant="outlined"
              sx={{ width: "100%" }}
              onFocus={focusHandler}
              onChange={changeHandler}
              multiline
              name="description"
              minRows={4}
              value={postData.description}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="معرفی شرکت"
              variant="outlined"
              sx={{ width: "100%" }}
              onFocus={focusHandler}
              onChange={changeHandler}
              multiline
              name="companyDiscription"
              minRows={4}
              value={postData.companyDiscription}
            />
          </Grid>

          <Grid item xs={12} m={2}>
            <Button variant="contained" onClick={sendHandler}>
              ارسال
            </Button>
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
    </RTL>
  );
}
