import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// * graphql
import { useMutation } from "@apollo/client";
import { SENDJOB } from "../../graphql/mutation";

// ? validation
import validation from "./validate";

//* list
import { militaryList, types, techList } from "./List";
//? styles material
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Container,
  Button,
  Typography,
  Box,
} from "@mui/material";
import RTL from "../../Shared/RTl";
import "../../styles/richText.css";
//! toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//? richTExteditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Post() {
  const [cooprationType, setCooprationType] = useState([]);
  const [military, setMilitary] = useState([]);
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState([]);
  const [sendData, setSendData] = useState(true);
  const [error, setError] = useState({});
  const [focus, setFocus] = useState(false);
  const [postData, setPostData] = useState({
    company: "",
    enCompany: "",
    jobTitle: "",
    category: "",
    companyDescription: "",
    experience: "",
    military: "",
    degree: "",
    sex: "",
    salary: "",
    citys: "",
  });

  //!mutation
  const [sendJob, { loading, data }] = useMutation(SENDJOB, {
    variables: {
      company: postData.company,
      enCompany: postData.enCompany,
      jobTitle: postData.jobTitle,
      cooprationType: cooprationType.toString(),
      description: description,
      category: postData.category,
      companyDescription: postData.companyDescription,
      experience: postData.experience,
      slugs: postData.enCompany.replace(/\s/g, "").toLowerCase(),
      citys: postData.citys,
      degree: postData.degree,
      militaryService: military.toString(),
      salary: postData.salary,
      sex: postData.sex,
      technology: technology.toString(),
    },
  });
  //!UseEffect
  useEffect(() => {
    setError(
      validation(postData, cooprationType, military, technology)
    );
  }, [postData, cooprationType]);
  

  //!ChangeHandler
  const changeHandler = (event) => {
    if (event.target.name === "military") {
      const {
        target: { value },
      } = event;
      setMilitary(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
    if (event.target.name === "technology") {
      const {
        target: { value },
      } = event;
      setTechnology(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
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
  //!focusHandler
  const focusHandler = (event) => {
    setFocus({
      ...focus,
      [event.target.name]: true,
    });
  };
  //! sendhandler
  const navigate = useNavigate();
  const sendHandler = (event) => {
    if (
      !postData.category ||
      !postData.experience ||
      !cooprationType ||
      !postData.sex ||
      !postData.military ||
      !postData.degree ||
      !postData.technology
    ) {
      setFocus({
        category: true,
        experience: true,
        cooprationType: true,
        sex: true,
        military: true,
        degree: true,
        technology: true,
      });
    }
    if (!Object.keys(error).length) {
      sendJob();
      setSendData(true);
    } else if (Object.keys(error).length) {
      toast.error(".تمامی فیلدها باید پر شوند");
    }
  };
  if (data && sendData) {
    toast.success("ارسال شد");
    const path = "/confirmation";
    navigate(path);
    setSendData(false);
  }
  return (
    <RTL>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={2} mb={2} minHeight="100vh">
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
            <Box>
              {error.jobTitle && focus.jobTitle && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.jobTitle}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label=" عنوان شرکت (به فارسی)"
              variant="outlined"
              sx={{ width: "100%" }}
              value={postData.company}
              name="company"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <Box>
              {error.company && focus.company && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.company}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label=" عنوان شرکت (به انگلیسی)"
              variant="outlined"
              sx={{ width: "100%" }}
              value={postData.enCompany}
              name="enCompany"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <Box>
              {error.enCompany && focus.enCompany && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.enCompany}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label=" استان"
              variant="outlined"
              sx={{ width: "100%" }}
              value={postData.citys}
              name="citys"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <Box>
              {error.citys && focus.citys && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.citys}
                </Typography>
              )}
            </Box>
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
                onFocus={focusHandler}
              >
                <MenuItem value="برنامه نویس">برنامه نویس</MenuItem>
                <MenuItem value="حسابدار">حسابدار</MenuItem>
                <MenuItem value="معماری">معماری</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {error.category && focus.category && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.category}
                </Typography>
              )}
            </Box>
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
                onFocus={focusHandler}
              >
                <MenuItem value="مهم نیست">مهم نیست</MenuItem>
                <MenuItem value="کمتر از 3 سال">کمتر از 3 سال</MenuItem>
                <MenuItem value="بین 3 تا 6 سال">بین 3 تا 6 سال</MenuItem>
                <MenuItem value="بیشتر از 6 سال">بیشتر از 6 سال</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {error.experience && focus.experience && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.experience}
                </Typography>
              )}
            </Box>
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
                onFocus={focusHandler}
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
            <Box>
              {error.cooprationType && focus.cooprationType && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.cooprationType}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">جنسیت</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={postData.sex}
                onChange={changeHandler}
                onFocus={focusHandler}
                label="جنسیت"
                name="sex"
              >
                <MenuItem value="مهم نیست">مهم نیست</MenuItem>
                <MenuItem value="مرد">مرد</MenuItem>
                <MenuItem value="زن">زن</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {error.sex && focus.sex && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {error.sex}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">
                {" "}
                حداقل مدرک تحصیلی
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={postData.degree}
                onChange={changeHandler}
                onFocus={focusHandler}
                label=" حداقل مدرک تحصیلی"
                name="degree"
              >
                <MenuItem value="مهم نیست">مهم نیست</MenuItem>
                <MenuItem value="دیپلم">دیپلم</MenuItem>
                <MenuItem value="لیسانس">لیسانس</MenuItem>
                <MenuItem value="فوق لیسانس">فوق لیسانس</MenuItem>
                <MenuItem value="دکتری">دکتری</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {error.degree && focus.degree && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {error.degree}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">
                وضعیت نظام وظیفه
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={military}
                onChange={changeHandler}
                onFocus={focusHandler}
                label=" وضعیت نظام وظیفه"
                name="military"
                multiple
              >
                {militaryList.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              {error.military && focus.military && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.military}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">
                مهارت های مورد نیاز
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={technology}
                onChange={changeHandler}
                onFocus={focusHandler}
                label="مهارت های مورد نیاز"
                name="technology"
                multiple
              >
                {techList.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              {error.technology && focus.technology && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.technology}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">حداقل حقوق</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={postData.salary}
                onChange={changeHandler}
                onFocus={focusHandler}
                label="حداقل حقوق"
                name="salary"
              >
                <MenuItem value="توافقی">توافقی</MenuItem>
                <MenuItem value=" 5,000,000">5,000,000</MenuItem>
                <MenuItem value="  10,000,000 ">10,000,000</MenuItem>
                <MenuItem value=" 20,000,000 ">20,000,000</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {error.technology && focus.technology && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.technology}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="p"
              component="p"
              color="#555"
              sx={{ margin: "5px 0" }}
            >
              شرح موقعیت شغلی
            </Typography>

            <div className="editor">
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
               
              onFocus={() => {
                setFocus(
                  {
                    ...focus,'description':true
                  }
                )
              }}
                
                name="description"
              />
            </div>
            <Box>
              {error.description &&  (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {error.description}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="معرفی شرکت"
              variant="outlined"
              sx={{ width: "100%" }}
              onFocus={focusHandler}
              onChange={changeHandler}
              multiline
              name="companyDescription"
              minRows={4}
              value={postData.companyDescription}
            />
            <Box>
              {error.companyDescription && focus.companyDescription && (
                <Typography
                  component="p"
                  variant="p"
                  color="red"
                  display="flex"
                  alignItems="center"
                >
                  {" "}
                  {error.companyDescription}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} m={2}>
            {loading ? (
              <Button variant="contained" onClick={sendHandler}>
                درحال ارسال
              </Button>
            ) : (
              <Button variant="contained" onClick={sendHandler}>
                ارسال
              </Button>
            )}
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
    </RTL>
  );
}
