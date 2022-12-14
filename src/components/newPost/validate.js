const validation = (data, cooprationType,military,technology,description) => {
  const error = {};

  //companyFa
  if (!data.company.trim()) {
    error.company = "عنوان شرکت باید وارد شود.";
  } else {
    delete error.company;
  }
  //companyEn
  if (!data.enCompany.trim()) {
    error.enCompany = "عنوان شرکت(به انگلیسی) باید وارد شود.";
  } else {
    delete error.enCompany;
  }

  //jobTitle
  if (!data.jobTitle.trim()) {
    error.jobTitle = "عنوان شغل باید وارد شود.";
  } else {
    delete error.jobTitle;
  }

  //category
  if (!data.category.trim()) {
    error.category = "حوزه کاری را مشخص کنید.";
  } else {
    delete error.category;
  }

  //   companyDescription
  if (!data.companyDescription.trim()) {
    error.companyDescription = "توضیحاتی در رابطه با شرکت وارد کنید.";
  } else {
    delete error.companyDescription;
  }

  //experience
  if (!data.experience.trim()) {
    error.experience = "حداقل سابقه کار را مشخص کنید.";
  } else {
    delete error.experience;
 }

 // militay
  if (!military.length) {
    error.military = "وضعیت نظام وظیفه  را مشخص کنید.";
  } else {
    delete error.military;
  }

  // degree
  if (!data.degree.trim()) {
    error.degree = "مدرک تحصیلی را مشخص کنید.";
  } else {
    delete error.degree;
  }
  // sex
  if (!data.sex.trim()) {
    error.sex = "جنسیت را مشخص کنید.";
  } else {
    delete error.sex;
  }
  // citys
  if (!data.citys.trim()) {
    error.citys = "استان را مشخص کنید.";
  } else {
    delete error.citys;
  }
  // technology
  if (!technology.length) {
    error.technology = "حداقل یک مهارت  را مشخص کنید.";
  } else {
    delete error.technology;
  }

  


//   cooprationType
  if (!cooprationType.length) {
    error.cooprationType = "نوع همکاری را مشخص کنید.";
  } else {
    delete error.cooprationType;
  }

  return error;
};

export default validation;
